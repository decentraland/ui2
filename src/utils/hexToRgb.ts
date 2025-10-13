/**
 * Converts an hexadecimal color into a RGBA string.
 * @param hex - A color represented as a 7 character hexadecimal color (including #).
 */
export const hexToRgba = (hex: string, alpha: number = 1) => {
  if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error("Invalid hexadecimal color")
  }
  if (alpha < 0 || alpha > 1) {
    throw new Error("Invalid alpha value")
  }
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
