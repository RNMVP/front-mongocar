const button = {
  colorScheme: {
    light: {
      primary: {
        background: '{primary.hover.color}',
        color: '{primary.color}',
      },
      text: {
        primary: {
          hover: {
            background: '{primary.hover.color}',
          }
        },
      },
      contrast: {
        background: 'none',
        borderColor: 'none',
        active: {
          background: 'none',
          borderColor: 'none',
        },
        hover: {
          color: '{primary.hover.color}',
          background: 'none',
          borderColor: 'none',
        }
      },
      link: {
        color: 'primary.color',
        hover: {
          Color: '{primary.hover.color}'
        }
      },
      subtitle: {
        color: '{surface.500}'
      }
    },
  }
}
export default button
