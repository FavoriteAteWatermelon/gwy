module.exports = {
  title: '公务员',
  // description: 'Hello, Object-c',
  head: [
      ['link', {
          rel: 'icon',
          href: './favicon.ico'
      }]
  ],
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // {
      //   text: 'Languages',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese' },
      //     { text: 'English', link: '/language/english' }
      //   ]
      // },
    ],
// sidebarDepth: 2,
sidebar: [
  {
    title: '行测',
    // collapsable: false,
    children: [
      '/行测/'
    ]
  },         
  {
    title: '常识判断',
    // collapsable: false,
    children: [
      '/常识判断/',
      '/常识判断/物理知识',
      '/常识判断/生物知识',
      '/常识判断/生活常识',
      '/常识判断/诸子百家',
    ]
  },         
      
]
},

}