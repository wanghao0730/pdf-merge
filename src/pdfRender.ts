import * as pdfjsLib from "pdfjs-dist"
import { jsPDF } from "jspdf"
import "pdfjs-dist/legacy/build/pdf.worker.entry.js"

import {
    PDFDocumentProxy,
    PDFPageProxy,
} from "pdfjs-dist/types/src/display/api";

const global: any = window;

export class PdfController {
    public pdfBlob?: Blob;
    //pdf promise Array
    private pdfPromiseArray?: Array<PDFDocumentProxy>
    private pdfPagePromiseArray?: []
    private pdfPageProxy?: [] // 所有的pdfpage数组 这个数组用于生成pdf使用
    private url?: Array<string>;
    private preFrame?: number;

    constructor(
        private wrapper: HTMLElement,
        private onError: (e: any) => void,
        private onSuccess: (pdf: PDFDocumentProxy) => void
    ) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = global.pdfjsWorker;
    }

    async init(url: Array<string>) {
        this.url = url;
        this.fetchPdf()
    }

    async fetchPdf() {
        const pdfArray = this.url?.map(url => {
            return pdfjsLib.getDocument(url).promise
        }) || []

       await Promise.all(pdfArray).then((list) => {
            this.pdfPromiseArray = list
            return list
        }).then(async pdfList => {
            const promises = [] as any[]
            pdfList.forEach(pdf => {
                const pdfNumpages = pdf!.numPages
                promises.push(...([...Array(pdfNumpages)].map((_, index) => {
                    return pdf.getPage(index + 1)
               })))
            })
            this.pdfPagePromiseArray = promises as []
        })
        this.initPages()
        
    }
    async initPages() {
        await Promise.all(this.pdfPagePromiseArray!).then(pages => {
            this.pdfPageProxy = pages
            this.renderPdf()
        })
    }
    async schedular(frameId?: number) {
        if (this.preFrame === undefined) {
            this.preFrame = frameId;
            await this.renderPdf();
        } else {
            this.preFrame = frameId;
        }
    }

    async renderPdf(num = 0) {
        while (this.pdfPageProxy && num < this.pdfPageProxy.length) {
            const page = this.pdfPageProxy[num] as PDFPageProxy
            let viewport = page!.getViewport({ scale: 1.5 })

            const size = this.wrapper.getBoundingClientRect();
            const rate = size.width / viewport.width;

            let canvas = document.createElement("canvas");
            let context = canvas.getContext("2d");

            canvas.width = Math.floor(viewport.width * rate);
            canvas.height = Math.floor(viewport.height * rate);

            let renderContext = {
                transform: [rate, 0, 0, rate, 0, 0],
                canvasContext: context!,
                viewport: viewport,
            };

            await page.render(renderContext).promise;

            if (num === 0) {
                this.clear();
            }

            this.wrapper.appendChild(canvas);

            num++;
        }
        this.preFrame = undefined;
    }

    //下载操作
    async download() {
        const doc = new jsPDF('p', 'pt', 'a4', false)
       
        if (this.wrapper) {
            this.wrapper.querySelectorAll('canvas').forEach((canvas, index) => {
                if (index > 0) {
                    doc.addPage() // 添加新的页面
                }
                 // 将每个canvas的内容绘制到pdf中
                 const imgData = canvas.toDataURL('image/png')
                 doc.addImage(imgData, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight())
            })

            const blob = doc.output('blob')
            const url  = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `file_${new Date().getTime()}.pdf`
            a.click()
            const newWin = window.open(url)
            newWin!.onload = function() {
                newWin?.print()
            }
            URL.revokeObjectURL(url)
        }
    }

    clear() {
        this.wrapper.innerHTML = "";
    }
}
