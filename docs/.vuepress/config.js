module.exports = {
  title: 'Brian Lai',
  description: 'Just playing around',
  locales:{
    '/':{
      lang: 'zh-TW',
    },
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/', target:'_self' },
      { text: '一人公司', link: '/company-of-one/'},
      { text: '架設網站', link: '/build-website/'},
      { text: '投資理財', link: '/investment/'},
      { text: '程式筆記', link: '/program-note/'},
      { text: '關於我', link: '/about/'},
      { text: '與我聯絡', link: '/contact/'},
      {
        text: '資源庫',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'WebLai 網站', link: 'https://weblai.co', target: '_blank' },
          { text: 'FB 社團', link: 'https://www.facebook.com/groups/260364855054460', target: '_blank' },
        ]
      }
    ],
    sidebar: {
      
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '/guide/',
            '/guide/company-of-one',
            '/guide/build-website',
            '/guide/investment'
          ]
        }
      ],
      '/company-of-one/': [
        {
          title: '一人公司',
          collapsable: false,
          children: [
            '/company-of-one/',
          ]
        },
        {
          title: '桌面佈置',
          collapsable: false,
          children: [
            '/company-of-one/desktop'
          ]
        }
      ],
      '/build-website/': [
        {
          title: '架設網站',
          collapsable: false,
          children: [
            '/build-website/'
          ]
        }
      ],
      '/investment/': [
        {
          title: '投資理財',
          collapsable: false,
          children: [
            '/investment/'
          ]
        }
      ],
      '/program-note/': [
        {
          title: '程式語言',
          collapsable: false,
          children: [
            '/program-note/',
            '/program-note/html',
            '/program-note/css',
            '/program-note/javascript',
            '/program-note/php'
          ]
        },
        {
          title: '開發工具',
          collapsable: false,
          children: [
            '/program-note/git',
            '/program-note/sass',
            '/program-note/jquery',
            '/program-note/bootstrap',
            '/program-note/tailwindcss',
            '/program-note/node-js',
            '/program-note/mysql'
          ]
        },
        {
          title: '框架',
          collapsable: false,
          children: [
            '/program-note/vue',
            '/program-note/react',
            '/program-note/laravel',
            '/program-note/express'
          ]
        },
        {
          title: '應用程式',
          collapsable: false,
          children: [
            '/program-note/wordpress',
            '/program-note/vuepress',
            '/program-note/gatsby-js'
          ]
        },
        {
          title: '其它技巧',
          collapsable: false,
          children: [
            '/program-note/speed'
          ]
        }
      ]
    },
    displayAllHeaders: true,
    sidebarDepth: 1,
    smoothScroll: true,
    activeHeaderLinks: true,
    lastUpdated: '上次更新',
    plugins: [
      '@vuepress/back-to-top',
      '@vuepress/medium-zoom'
    ],
    extend: '@vuepress/theme-default'
  }
}