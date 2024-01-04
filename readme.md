### ahao-pdf-merge合并多个pdf文件实现打印功能
```
    <pdf-view url='https://pdf-lib.js.org/assets/with_update_sections.pdf,https://pdf-lib.js.org/assets/with_update_sections.pdf,https://pdf-lib.js.org/assets/with_update_sections.pdf,https://pdf-lib.js.org/assets/dod_character.pdf'></pdf-view>
        <button onclick="handlerDownload()">下载pdf1</button>
        <script>
            const pdfView = document.querySelector("pdf-view");
            const video = document.querySelector("video");
            function handlerDownload() {
                pdfView.downLoad()
            }
        </script>
```


```
vue写法
    <template>
        <pdf-view :url="urlList" ref="myRef"></pdf-view>
    </template>
export default defineComponent({
  setup() {
    const myRef = ref(null)
    const urlList = ref('')
    //模拟异步请求
    setTimeout(() => {
      urlList.value = 'https://pdf-lib.js.org/assets/with_update_sections.pdf,https://pdf-lib.js.org/assets/with_update_sections.pdf'
    }, 2000);
    const handleDonw = () => {
      myRef.value.controller.download()
    }
    return {
      urlList,
      handleDonw,
      myRef
    }
  },
})
</script>

代码灵感来源:https://github.com/yangxuy/pdf-reader
```