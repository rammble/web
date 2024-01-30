import { mode } from '@chakra-ui/theme-tools'

export interface ScaleOptions {
  color: [hue: number, saturation: number, lightness: number]
  reverse?: boolean
  alpha?: {
    enabled: boolean
    max?: number
    min?: number
  }
  dark: {
    min: number // the minimum lightness value
    amount: number
    hueShiftPercent: number
    saturatePercent: number
    offset: number
  }
  light: {
    max: number // the maximum lightness value
    amount: number
    hueShiftPercent: number
    saturatePercent: number
    offset: number
  }
}

export const generateColorScale = (scaleOptions: ScaleOptions): string[] => {
  const {
    color,
    dark,
    light,
    alpha: { enabled: isAlphaScale = false, max = 1, min = 0 } = {
      enabled: false,
      max: 1,
      min: 0,
    },
    reverse,
  } = scaleOptions
  const [hue, saturation, lightness] = color

  const darkColors = []
  const lightColors = []

  const increment = max / (light.amount + dark.amount + 1 - min + max)
  const baseAlpha = reverse
    ? max - increment * (dark.amount + dark.offset)
    : increment * (dark.amount + max)

  // generate dark colors
  for (let i = dark.offset; i < dark.amount + dark.offset; i++) {
    const amount = dark.amount + dark.offset
    const newLightness = lightness - (dark.min / amount) * i
    const newSaturation = saturation + (dark.saturatePercent / amount) * i
    const newHue = hue + (dark.hueShiftPercent / amount) * i

    // calculate alpha from 0 to dark.amount
    const alpha = reverse
      ? increment * (i + light.amount + light.offset)
      : max - increment * (i + light.amount + 1)

    darkColors.push(
      `hsl(${newHue} ${newSaturation}% ${newLightness}% / ${
        isAlphaScale ? alpha : 1
      })`,
    )
  }

  // generate light colors
  for (let i = light.offset; i < light.amount + light.offset; i++) {
    const amount = light.amount + light.offset
    const newLightness = lightness + (light.max / amount) * i
    const newSaturation = saturation + (light.saturatePercent / amount) * i
    const newHue = hue + (light.hueShiftPercent / amount) * i

    // light alpha will continue from the base alpha
    const alpha = reverse
      ? max - increment * (i + dark.amount + dark.offset)
      : increment * (i + dark.amount + 1)

    lightColors.push(
      `hsl(${newHue} ${newSaturation}% ${newLightness}% / ${
        isAlphaScale ? alpha : 1
      })`,
    )
  }

  const colors = [
    ...darkColors.reverse(),
    `hsl(${hue} ${saturation}% ${lightness}% / ${
      isAlphaScale ? baseAlpha : 1
    })`,
    ...lightColors,
  ]

  if (reverse) {
    return colors.reverse()
  }

  return colors
}

export const generateSpectrum = (
  mode: 'light' | 'dark',
  color: [hue: number, saturation: number, lightness: number],
) => {
  const isLightMode = mode === 'light'

  const getOptions = (isAlpha: boolean) =>
    ({
      color,
      reverse: isLightMode,
      light: {
        amount: isLightMode ? 7 : 4,
        max: isLightMode ? 40 : 20,
        saturatePercent: -40,
        hueShiftPercent: 5,
        offset: 1,
      },
      dark: {
        amount: isLightMode ? 4 : 7,
        min: isLightMode ? 30 : 55,
        saturatePercent: -30,
        hueShiftPercent: 5,
        offset: 1,
      },
      alpha: {
        enabled: isAlpha,
        max: 0.98,
        min: 0.03,
      },
    }) satisfies ScaleOptions

  return [
    generateColorScale(getOptions(false)),
    generateColorScale(getOptions(true)),
  ] as const
}
