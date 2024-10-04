import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "秘境寻踪Wiki",
  description: "欢迎你!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    externalLinkIcon: true,
    logo: {src: "https://www.helloimg.com/i/2024/10/04/66ffec15126e5.png", width: 28, height: 28},
    search: {
      provider: 'local'
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
    nav: [
      { text: '主页', link: '/' },
      { text: '获取客户端', link: 'https://cloud.wujiyan.cc/s/dWNHE' },
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
          { text: '🫤如何进入服务器', link: '/start/join' },
          { text: '', link: '/serintro' },
          { text: '', link: '/recruitment.md'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
