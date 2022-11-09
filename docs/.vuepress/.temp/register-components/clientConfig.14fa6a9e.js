import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Download", defineAsyncComponent(() => import("/Users/qx/Desktop/apaas自定义通用组件/apaas/docs/.vuepress/components/Download.vue")))
  },
}
