const themeLight = {
  primary: {
    bg: '#2196f3', // 95%
    text: '#229af5' // 96%
  },
  secondary: {},
  contrast: {
    0: {
      text: '#ffffff', // 100%
      bg: '#ffffff' // 100%
    },
    1: {
      text: '#ebebeb', // 92%
      bg: '#efefef' // 93%
    },
    2: {
      text: '#cccccc', // 80%
      bg: '#d0d0d0' // 81%
    },
    3: {
      text: '#8c8c8c', // 55% brightness
      bg: '#a6a6a6' // 65% brightness
    },
    4: {
      text: '#808080', // 50% brightness // TODO: ajustar
      bg: '#808080' // 50% brightness
    },
    5: {
      text: '#4a4a4a', // 29% brightness
      bg: '#4d4d4d' // 30% brightness
    }
  },
  success: {
    text: '#9c27b0',
    bg: '#ca60dc'
  },
  warning: {
    text: '#9c27b0', // 69%
    bg: '#ca60dc' // 86%
  },
  danger: {
    text: '#9c27b0',
    bg: '#ca60dc'
  }
};

export default themeLight;
