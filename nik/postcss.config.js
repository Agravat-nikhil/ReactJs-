module.exports = {
    plugins: [
      require('autoprefixer')({
        overrideBrowserslist: ['last 2 versions', 'ie > 9'],
        // Add any other options you might need
      }),
      // You can add other PostCSS plugins here
    ],
  };

  