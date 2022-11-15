export const data = JSON.parse("{\"key\":\"v-952a5aea\",\"path\":\"/component/\",\"title\":\"自开发组件\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"TODO\",\"slug\":\"todo\",\"link\":\"#todo\",\"children\":[]}],\"git\":{\"updatedTime\":1667960228000,\"contributors\":[{\"name\":\"milkdue\",\"email\":\"321432896@qq.com\",\"commits\":1}]},\"filePathRelative\":\"component/README.md\"}")

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
