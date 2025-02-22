import {definePreset} from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import {palette} from '@primeng/themes';
import light from './light';
import button from './components/button';

const primaryColor = palette('{indigo}')


export const AppPreset = definePreset(Aura, {
  semantic: {
    primary: {...primaryColor},
    colorScheme: {
      light,
    },
  },
  components: {
    button
  }
});
