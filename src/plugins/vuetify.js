import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  // https://vuetifyjs.com/en/styles/colors/
  theme: {
    themes: {
      light: {
        primary: colors.teal.darken2,
        secondary: colors.teal.lighten2,
        loading: colors.teal.lighten3,
        accent: colors.indigo.base
      },
    },
  }
});
