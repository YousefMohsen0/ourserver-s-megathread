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
            { text: '📱اندرويد', link: '/Android' },
            { text: '📗كتب / كوميكس / مانجا', link: '/Books-Comics-Manga' },
            { text: '🔍مواقع بحث', link: '/CSEs' },
            { text: '🎮العاب / محاكاة', link: '/Games&Emulation' },
            { text: '📺افلام / مسلسلات', link: '/Movies-TV' },
            { text: '🎵موسيقى / بودكاست / راديو', link: '/Music-Podcasts-Radio' },
            { text: '🎌اوتاكو', link: '/otaku' }
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
            { text: '⭐ عليه اقبال كبير من مجتمع القرصنة'},
            { text: '🌐 فهارس عليها معلومات للحاجة'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YousefMohsen0/OurServersWiki' }
    ],
    footer: {
      message: 'made with ❤ Thanks to FMHY.net',
      copyright: '© 2025 YousefMohsen'
    }, 

    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    },

    outline: [2, 3],

    editLink: {
      pattern: 'https://github.com/YousefMohsen0/OurServersWiki/edit/main/docs/:path',
      text: '📝 Edit this page'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.webp', type: 'image/png' }]
  ],
  ignoreDeadLinks: true
})