/**
 * Converts an hexadecimal color into a RGBA string.
 * @param hex - A color represented as a 7 character hexadecimal color (including #).
 */
export const hexToRgba = (hex: string, alpha: number = 1) => {
  const isShortHex = /^#[0-9A-Fa-f]{3}$/.test(hex)
  const isLongHex = /^#[0-9A-Fa-f]{6}$/.test(hex)

  if (!isShortHex && !isLongHex) {
    throw new Error('Invalid hexadecimal color')
  }

  if (alpha < 0 || alpha > 1) {
    throw new Error('Invalid alpha value')
  }

  const normalizedHex = isShortHex ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}` : hex

  const r = parseInt(normalizedHex.slice(1, 3), 16)
  const g = parseInt(normalizedHex.slice(3, 5), 16)
  const b = parseInt(normalizedHex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
