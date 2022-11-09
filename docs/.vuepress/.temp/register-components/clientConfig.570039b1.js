import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Checkbox", defineAsyncComponent(() => import("/Users/qx/Desktop/apaas通用组件文档/docs/.vuepress/components/Checkbox.vue"))),
      app.component("Download", defineAsyncComponent(() => import("/Users/qx/Desktop/apaas通用组件文档/docs/.vuepress/components/Download.vue"))),
      app.component("View", defineAsyncComponent(() => import("/Users/qx/Desktop/apaas通用组件文档/docs/.vuepress/components/View.vue"))),
      app.component("LDownload", defineAsyncComponent(() => import("/Users/qx/Desktop/apaas通用组件文档/docs/.vuepress/components/Download.vue"))),
      app.component("LCheckbox", defineAsyncComponent(() => import("/Users/qx/Desktop/apaas通用组件文档/docs/.vuepress/components/Checkbox.vue"))),
      app.component("LView", defineAsyncComponent(() => import("/Users/qx/Desktop/apaas通用组件文档/docs/.vuepress/components/View.vue")))
  },
}
