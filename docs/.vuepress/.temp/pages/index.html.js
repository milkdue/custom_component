export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/imgs/logo.jpeg\",\"actions\":[{\"text\":\"页面\",\"link\":\"/page/\",\"type\":\"secondary\"},{\"text\":\"组件 →\",\"link\":\"/component/\",\"type\":\"primary\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1667960228000,\"contributors\":[{\"name\":\"milkdue\",\"email\":\"321432896@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

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
