import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import {palette} from '@primeng/themes';

const primaryColor = palette('{indigo}')
console.log(primaryColor)

export const AppPreset = definePreset(Aura, {
  semantic: {
    primary: {...primaryColor},
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          inverseColor: '#ffffff',
          hoverColor: '{zinc.900}',
          activeColor: '{zinc.800}'
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
          color: '#fff',
          focusColor: '#fff'
        },
        button:{
          background: '{primary.100}',
        }
      },
      dark: {
        primary: {
          color: '{zinc.50}',
          inverseColor: '{zinc.950}',
          hoverColor: '{zinc.100}',
          activeColor: '{zinc.200}'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
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
        dark: {
          root: {
            background: '{surface.900}',
            color: '{surface.0}'
          },
          subtitle: {
            color: '{surface.400}'
          }
        }
      }
    }
  }
});
