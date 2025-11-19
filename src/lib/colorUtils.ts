export interface ColorValue {
  hue: number
  saturation: number
  lightness: number
}

export function hslToString(color: ColorValue): string {
  return `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`
}

/**
 * Adjusts color to maintain professional appearance
 * Prevents overly bright/saturated colors while preserving user intent
 */
export function adjustToProfessional(color: ColorValue): ColorValue {
  const adjusted = { ...color }
  
  // Cap saturation at 85% for professional look (prevents neon colors)
  if (adjusted.saturation > 85) {
    adjusted.saturation = 85
  }
  
  // Ensure minimum saturation of 20% (prevents dull grays)
  if (adjusted.saturation < 20) {
    adjusted.saturation = 20
  }
  
  // Prevent overly bright colors (cap at 70% lightness)
  if (adjusted.lightness > 70) {
    adjusted.lightness = 70
  }
  
  // Prevent overly dark colors (minimum 25% lightness for readability)
  if (adjusted.lightness < 25) {
    adjusted.lightness = 25
  }
  
  // Special handling for yellows/oranges (40-70° hue range)
  // These tend to look unprofessional when too saturated
  if (adjusted.hue >= 40 && adjusted.hue <= 70) {
    if (adjusted.saturation > 70) {
      adjusted.saturation = 70
    }
    if (adjusted.lightness > 60) {
      adjusted.lightness = 60
    }
  }
  
  return adjusted
}

/**
 * Creates a harmonious color palette with professional constraints
 */
export function createProfessionalPalette(primary: ColorValue, secondary: ColorValue, tertiary: ColorValue) {
  return {
    primary: adjustToProfessional(primary),
    secondary: adjustToProfessional(secondary),
    tertiary: adjustToProfessional(tertiary)
  }
}
