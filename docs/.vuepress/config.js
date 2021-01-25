module.exports = {
  title: 'Brian Lai',
  description: 'Just playing around',
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
        },
      ],
      '/company-of-one/': [
        {
          title: '一人公司',
          collapsable: false,
          children: [
            '/company-of-one/'
          ]
        },
      ],
      '/build-website/': [
        {
          title: '架設網站',
          collapsable: false,
          children: [
            '/build-website/'
          ]
        },
      ],
      '/investment/': [
        {
          title: '投資理財',
          collapsable: false,
          children: [
            '/investment/'
          ]
        },
      ],
      '/program-note/': [
        {
          title: '程式筆記',
          collapsable: false,
          children: [
            '/program-note/'
          ]
        },
      ],
    },
    displayAllHeaders: true,
    sidebarDepth: 2,
    smoothScroll: true,
    activeHeaderLinks: true,
    lastUpdated: '上次更新',
    plugins: ['@vuepress/back-to-top']
  }
}