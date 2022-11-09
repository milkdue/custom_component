import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Checkbox", defineAsyncComponent(() => import("/Users/qx/Desktop/apaas/docs/.vuepress/components/Checkbox.vue"))),
      app.component("Download", defineAsyncComponent(() => import("/Users/qx/Desktop/apaas/docs/.vuepress/components/Download.vue"))),
      app.component("LDownload", defineAsyncComponent(() => import("/Users/qx/Desktop/apaas/docs/.vuepress/components/Download.vue")))
  },
}
