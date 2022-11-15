export const data = JSON.parse("{\"key\":\"v-62216f56\",\"path\":\"/page/example.html\",\"title\":\"自开发首页\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"首页\",\"slug\":\"首页\",\"link\":\"#首页\",\"children\":[]},{\"level\":2,\"title\":\"功能描述\",\"slug\":\"功能描述\",\"link\":\"#功能描述\",\"children\":[]},{\"level\":2,\"title\":\"TODO\",\"slug\":\"todo\",\"link\":\"#todo\",\"children\":[]},{\"level\":2,\"title\":\"下载包\",\"slug\":\"下载包\",\"link\":\"#下载包\",\"children\":[]}],\"git\":{\"updatedTime\":1667960228000,\"contributors\":[{\"name\":\"milkdue\",\"email\":\"321432896@qq.com\",\"commits\":1}]},\"filePathRelative\":\"page/example.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
