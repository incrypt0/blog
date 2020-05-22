const path = require("path");

const markdownIt = require('markdown-it')
const markdownItPrism = require('markdown-it-prism'); 
import Mode from 'frontmatter-markdown-loader/mode'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   extend(config, ctx) {
    // add frontmatter-markdown-loader
    config.module.rules.push({
      test: /\.md$/,
      include: path.resolve(__dirname, "content"),
      loader: "frontmatter-markdown-loader",
      options: {
        mode: [Mode.VUE_COMPONENT, Mode.META,Mode.HTML],
        markdownIt:markdownIt({
          html:true,
        //   highlight: function (str, lang) {
        //     console.log("HIGHLIGH CALLED")
        //     if (lang && hljs.getLanguage(lang)) {
        //       try {
        //         return hljs.highlight(lang, str).value;
        //       } catch (__) {}
        //     }
        
        //     return ''; // use external default escaping
        //   }
        }).use(markdownItPrism)
      }
    });
  }
  }
}
