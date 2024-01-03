import { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api"
import { jsPDF } from "jspdf"
import { PdfController } from "./pdfRender"


class PdfView extends HTMLElement {
    public controller?: PdfController;
    private wrapper: HTMLElement;
    private frameId?: number;

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        
        const element = document.createElement("div")
        element.setAttribute("class", "canvas-container")
        this.wrapper = element

        shadow.appendChild(this.wrapper);

        this.controller = new PdfController(
            this.wrapper,
            (e) => this.onError(e),
            (pdf) => this.onSuccess(pdf)
        );
        window.addEventListener("resize", this.sizeObserver.bind(this));
    }

    sizeObserver() {
        this.frameId && window.cancelAnimationFrame(this.frameId);
        this.frameId = window.requestAnimationFrame(async () => {
            await this.controller?.schedular(this.frameId);
        });
    }

    onError(e: any) {
        this.dispatchEvent(new CustomEvent("onError", { detail: e }));
    }

    onSuccess(pdf: PDFDocumentProxy) {
        this.dispatchEvent(new CustomEvent("onSuccess", { detail: pdf }));
    }

    connectedCallback() {
        const style = this.getAttribute("style") ?? "";
        this.wrapper.setAttribute("style", style);
    }

    disconnectedCallback() {
        window.removeEventListener("resize", this.sizeObserver);
        this.frameId && window.cancelAnimationFrame(this.frameId);
    }

    static get observedAttributes() {
        return ["url"];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (Array.isArray(newValue)) {
            this.controller?.init(newValue)
        }
        else {
            this.controller?.init(JSON.parse(newValue))
        }
    }

    downLoad() {
		this.controller?.download()
    }

    //preview预览操作
    previewPdfFile() {
        
    }
}

customElements.define("pdf-view", PdfView);
