import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "秘境寻踪Wiki",
  description: "欢迎你!",
  head: [
    [ "link", {rel: "icon", href: "/nicet-light.svg"}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    externalLinkIcon: true,
    logo: {
      dark: 'nicet-dark.png',
      light: 'nicet-light.svg',
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
      pattern: 'https://github.com/s80808080/nicetravel/edit/main/docs/:path',
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
      { text: '获取客户端', link: 'https://cloud.wujiyan.cc/s/0qktZ' },
      { 
        text: '关于',
        items: [
          { text: '认识我们', link: '/info/aboutus'},
          { text: '联系我们', link: '/info/contact'}
        ]
      },
    ],

    sidebar: [
      {
        items: [
          { text: '😊欢迎来到Wiki', link: '/info/intro' },
          { text: '📘服务器介绍', link: '/info/serintro' },
          { text: '🖐管理招募', link: '/info/recruitment'},
        ]
      },
      {
        text: '初来乍到',
        items: [
          { text: '😇你需要先了解什么', link: '/start/sknow'},
          { text: '🫤如何加入游戏', link: '/start/join' },
          { text: '📠注册与登录', link: '/start/regl' },
          { text: '', link: '/recruitment.md'},
        ]
      }
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
