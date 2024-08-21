module.exports = {
    // other webpack config
    ignoreWarnings: [
      {
        module: /mdb-react-ui-kit\/dist\/css\/mdb\.min\.css/,
        message: /autoprefixer: Replace color-adjust to print-color-adjust/,
      },
    ],
  };
  