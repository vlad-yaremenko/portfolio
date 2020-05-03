const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.scss'],
      alias: {
        '@': path.join(__dirname, 'src'),
        '@variables': path.join(__dirname, 'src/styles/_variables.scss'),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        data: `
          @import '~@variables';
        `,
      },
    },
  },
};
