import {palette} from '@primeng/themes';

const surfaceColor = palette('{zinc}')

const light = {
  primary: {
    color: '#fff',
    inverseColor: '#000',
    hoverColor: '{yellow.500}',
    activeColor: '{blue.800}'
  },
  surface: {
    ...surfaceColor
  },
  secondary: {
    color: '#d8cfcf',
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
  text:{
    title: '#2c3e50',
    label: '#34495e',
    color: '#000',
    error:{
      color: '{red.500}'
    }
  }
}
export default light;
