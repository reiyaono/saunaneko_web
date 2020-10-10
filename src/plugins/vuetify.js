import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  // https://vuetifyjs.com/en/styles/colors/
  theme: {
    themes: {
      light: {
        primary: colors.teal.darken2, // #E53935
        secondary: colors.teal.lighten2, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
  }
});
