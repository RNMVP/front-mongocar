import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import {palette} from '@primeng/themes';

const primaryColor = palette('{indigo}')
const surfaceColor = palette('{stone}')

export const AppPreset = definePreset(Aura, {
  semantic: {
    primary: {...primaryColor},
    colorScheme: {
      light: {
        primary: {
          color: '#fff',
          inverseColor: '#000',
          hoverColor: '{yellow.900}',
          activeColor: '{blue.800}'
        },
        surface: {
          ...surfaceColor
        },
        secondary: {
          color: '#000',
          inverseColor: '#fff',
          hoverColor: '#555',
          activeColor: '#117'
        },
        highlight: {
          background: '{primary.700}',
          focusBackground: '{primary.700}',
          color: '{yellow.900}',
          focusColor: '#fff'
        },
      },
    },
  },
  components: {
    button: {
      colorScheme: {
        light: {
          primary: {
            background: '{primary.color}',
            color: '{surface.700}'
          },
          subtitle: {
            color: '{surface.500}'
          }
        },
      }
    }
  }
});
