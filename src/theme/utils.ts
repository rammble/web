export const getAsCSSVar = (type: string, value: string | number) =>
  `var(--ram-${type}-${value.toString().replace(/\./, '-')})`
