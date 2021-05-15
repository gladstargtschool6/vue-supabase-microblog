module.exports = {
  pages: {
    'index' {
      entry: './src/main.js',
      template: 'public/index.html',
      title: 'Welcome to my vue generator project',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    /* Disabled - Only one time
    'googleVerify': {
      entry: './src/error-instance.ts',
      template: 'public/somelink.html',
      title: 'Error page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    */

  },
  devServer: {
    'port': 3000
  },
  css: {
    sourceMap: false
  },
  pwa: {
    name: 'My App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
}
