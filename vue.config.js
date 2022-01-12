module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "./src/style/_variables.scss";
            @import "./src/style/_mixins.scss";
          `,
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
};
