import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "秘境寻踪Wiki",
  description: "欢迎你!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/s80808080/nicetravel/edit/main/docs/:path',
      text: '在Github上编辑此页'
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '获取客户端', link: 'https://cloud.wujiyan.cc/s/dWNHE' },
      { text: '关于,', link: '/about/'}
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '😊欢迎来到Wiki', link: '/intro' },
          { text: '📘服务器介绍', link: '/serintro' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
