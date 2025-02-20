import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import {palette} from '@primeng/themes';

const primaryColor = palette('{zinc}')
console.log(primaryColor)

export const AppPreset = definePreset(Aura, {
  semantic: {
    primary: {...primaryColor}
  }
});
