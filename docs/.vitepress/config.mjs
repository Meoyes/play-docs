import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "寒假联机Wiki",
  description: "欢迎你!",
  head: [
    [ "link", {rel: "icon", href: "/nicet-light.svg"}]
  ],
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    externalLinkIcon: true,
    logo: {
      src: "/icon.svg",
      width: 24,
      height: 24
    },
    search: {
      provider: 'local'
    },
    outline: {
      label: '页面导航'
    },
    editLink: {
      pattern: 'https://github.com/Meoyes/play-docs/edit/main/docs/:path',
      text: '在Github上编辑此页'
    },
      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
        }
      },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    nav: [
      { text: '主页', link: '/' },
    ],

    sidebar: [
      {
        items: [
          { text: '😊欢迎来到Wiki', link: '/info/intro' },
          { text: '📘如何加入', link: '/info/howjoin' },
        ]
      },
      {
        text: "科普",
        items: [
          { text: '💻客户端与服务端', link: '/sk/kaf'},
        ]
      },
      {
        text: "玩法",
        items: [
          { text: '💫更多附魔', link: '/wf/excell'},
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    image: {
      // 图片懒加载
      lazyLoading: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
})
