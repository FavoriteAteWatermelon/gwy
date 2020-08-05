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
      
]
},

}