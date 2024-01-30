const transitionProperty = {
  common:
    'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
  colors: 'background-color, border-color, color, fill, stroke',
  dimensions: 'width, height',
  position: 'left, right, top, bottom',
  background: 'background-color, background-image, background-position',
}

const transitionTimingFunction = {
  'ease-in': 'cubic-bezier(0.04, 0.91, 0.6, 0.99)',
  'ease-out': 'cubic-bezier(0.04, 0.91, 0.6, 0.99)',
  'ease-in-out': 'cubic-bezier(0.04, 0.91, 0.6, 0.99)',
}

const transitionDuration = {
  'ultra-fast': '0.082s',
  faster: '0.18s',
  fast: '0.28s',
  normal: '0.4s',
  slow: '0.6s',
  slower: '0.8s',
  'ultra-slow': '1s',
}

export const transition = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration,
}
