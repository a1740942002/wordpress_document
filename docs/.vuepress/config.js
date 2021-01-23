module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      {text: '關於我', link: '/about/'},
      { text: '馬上開始', link: '/first/', target:'_self' },
      {
        text: '資源庫',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'WebLai 網站', link: 'https://weblai.co', target: '_blank' },
          { text: 'FB 社團', link: 'https://www.facebook.com/groups/260364855054460', target: '_blank' },
        ]
      }
    ],
    sidebar: [
      '/first/',
      {
        title: '開發',
        sidebarDepth:2,
        collapsable: false,
        children: [
          '/second/test1.md',
          '/second/test2.md'
        ]
      },
      '/third/third-new/'
    ],
    smoothScroll: true,
    activeHeaderLinks: true,
    lastUpdated: '上次更新',
    plugins: ['@vuepress/back-to-top']
  }
}