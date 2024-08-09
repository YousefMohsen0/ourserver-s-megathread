import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "OSW",
  description: "Our Server's Wiki",
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Updates', link: '/updates' }
    ],

    sidebar: {
      '/': [
        {
          items: [
            { text: '⚠دليل المبتدئين', link: '/beginners-guide' },
            { text: '📺افلام / مسلسلات / انمي', link: '/Movies-TV-Anime' },
            { text: '🎮العاب / محاكاة', link: '/Games-Emmulation' },
            { text: '🎵موسيقة / بودكاست / راديو', link: '/Music-Podcasts-Radio' },
            { text: '📗كتب / كوميكس / مانجا', link: '/Books-Comics-Manga' }
          ]
        },
        {
          text: '🛠ادوات',
          collapsed: false, 
          items: [
            { text: 'لسة شغال عليهم'},
          ]
        },
        {
          text: '➕زيادة',
          collapsed: true, 
          items: [
            { text: '🌟 عليه اقبال كبير من مجتمع القرصنة'},
            { text: '🌐 فهارس عليها معلومات للحاجة'},
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YousefMohsen0/ourserverswiki' }
    ],

    search: {
      provider: 'local'
    }
  }
})
