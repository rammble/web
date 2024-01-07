import { extendTheme } from '@chakra-ui/react'

export const layerStyles = {
  gradients: {
    grey: {
      bgGradient:
        'linear-gradient(0deg, rgba(246, 250, 255, 0.05), rgba(246, 250, 255, 0.05)), linear-gradient(125.2deg, rgba(255, 255, 255, 0.075) 0%, rgba(255, 255, 255, 0) 99.69%)',
    },

    // Using a string doesnt allow the layerStyles to be used in the theme. Example grey gradient will work, 'ui.2-5' will not. None of the gradients below are being used at the moment.

    //   'ui.2-5': {
    //     bgGradient:
    //       'linear-gradient(125deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.00) 99.69%)',
    //   },
    //   'ui.7-5': {
    //     bgGradient:
    //       'linear-gradient(125deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 99.69%)',
    //   },
    //   'brand.40': {
    //     bgGradient:
    //       'linear-gradient(125deg, rgba(35, 35, 53, 0.40) 0%, rgba(21, 21, 31, 0.40) 99.69%)',
    //   },
    //   'brand.100': {
    //     bgGradient: 'linear-gradient(125deg, #232335 0%, #15151F 99.69%)',
    //   },
    // },
  },
}
