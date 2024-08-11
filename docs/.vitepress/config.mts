import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OSW",
  description: "Our Server's Wiki",
  themeConfig: {
    logo: '/logo.webp',
    nav: [
      { text: '🏠Home', link: '/' },
      { text: '📚دليل المبتدئين', link: '/beginners-guide' },
      { text: '📢تحديثات', link: '/updates' }
    ],

    sidebar: {
      '/': [
        {
          items: [
            { text: '📚دليل المبتدئين', link: '/beginners-guide' },
            { text: '⚠مهم', link: '/important' },
            { text: '🔍مواقع بحث', link: '/CSEs' },
            { text: '📺افلام / مسلسلات / انمي', link: '/Movies-TV-Anime' },
            { text: '🎮العاب / محاكاة', link: '/Games&Emmulation' },
            { text: '🎵موسيقة / بودكاست / راديو', link: '/Music-Podcasts-Radio' },
            { text: '📗كتب / كوميكس / مانجا', link: '/Books-Comics-Manga' },
            { text: '📱اندرويد', link: '/Android' }
          ]
        },
        {
          text: '🛠ادوات',
          collapsed: false, 
          items: [
            { text: '👾 ادوات العاب', link: '/Gaming-Tools' }
          ]
        },
        {
          text: '➕زيادة',
          collapsed: false,
          items: [
            { text: '❗ غير موثوق بيهم', link: '/Unsafe' }
          ]
        },
        {
          text: 'ملحوظة 📝',
          collapsed: true, 
          items: [
            { text: '🌟 عليه اقبال كبير من مجتمع القرصنة'},
            { text: '🌐 فهارس عليها معلومات للحاجة'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YousefMohsen0' }
    ],
    footer: {
      message: 'made with ❤ Thanks to FMHY.net',
      copyright: '© 2024 YousefMohsen'
    }, 

    search: {
      provider: 'local'
    },

    lastUpdated: true,

    outline: [2, 3, 4, 5, 6]
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.webp', type: 'image/png' }]
  ]
})