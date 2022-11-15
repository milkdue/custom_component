export const themeData = JSON.parse("{\"logo\":\"/imgs/favicon.ico\",\"lastUpdated\":true,\"repo\":\"https://github.com/milkdue/custom_component\",\"editLink\":false,\"navbar\":[{\"text\":\"页面\",\"link\":\"/page/\"},{\"text\":\"组件\",\"link\":\"/component/\"},{\"text\":\"附录\",\"link\":\"/appendix/\"}],\"sidebar\":{\"/page/\":[{\"text\":\"页面\",\"children\":[\"/page/README.md\",\"/page/example.md\",\"/page/sso.md\"]}],\"/component/\":[{\"text\":\"组件\",\"children\":[\"/component/README.md\",\"/component/viewlist.md\",\"/component/badge.md\",\"/component/function.md\"]}],\"/appendix/\":[{\"text\":\"附录\",\"children\":[\"/appendix/README.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
