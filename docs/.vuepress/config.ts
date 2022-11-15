/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2022-11-01 11:03:24
 * @LastEditTime: 2022-11-15 14:08:10
 */
import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { containerPlugin } from '@vuepress/plugin-container'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import path from 'path'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: 'aPaas自开发',
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/imgs/favicon"
            }
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css"
            }
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/hexo-tag-plugins@latest/lib/tag_plugins.min.css"
            }
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/gh/l-lin/font-awesome-animation/dist/font-awesome-animation.min.css"
            }
        ],
    ],
    description: "apaas自开发相关",
    dest: path.resolve(__dirname, '../dist'),
    theme: defaultTheme({
        logo: '/imgs/favicon.ico',
        lastUpdated: true,
        repo: 'https://github.com/milkdue/custom_component',
        editLink: false,
        navbar: [
            {
                text: '页面',
                link: '/page/'
            },
            {
                text: '组件',
                link: '/component/'
            },
            {
                text: '附录',
                link: '/appendix/'
            }
        ],
        sidebar: {
            "/page/": [
                {
                    text: '页面',
                    children: [
                        "/page/README.md",
                        "/page/example.md",
                        "/page/sso.md"
                    ]
                }
            ],
            "/component/": [
                {
                    text: '组件',
                    children: [
                        "/component/README.md",
                        "/component/viewlist.md",
                        "/component/badge.md",
                        "/component/function.md"
                    ]
                }
            ],
            "/appendix/": [
                {
                    text: '附录',
                    children: [
                        "/appendix/README.md"
                    ]
                }
            ]
        }
    }),
    plugins: [
        searchPlugin(),
        backToTopPlugin(),
        containerPlugin({
            type: 'tag',
            before: (info) => `<div class="${info}">\n`,
            after: (): string => '</div>\n'
        }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
            components: {
                LDownload: path.resolve(__dirname, './components/Download.vue'),
                LCheckbox: path.resolve(__dirname, './components/Checkbox.vue'),
                LView: path.resolve(__dirname, './components/View.vue'),
            }
        }),
    ]
})