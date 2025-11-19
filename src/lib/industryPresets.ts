import { ColorValue } from './colorUtils'

export interface IndustryPreset {
  name: string
  description: string
  colors: {
    primary: ColorValue
    secondary: ColorValue
    tertiary: ColorValue
  }
  styleType: 'professional' | 'modern' | 'creative' | 'elegant' | 'playful'
  fonts: {
    heading: string
    body: string
  }
  characteristics: string[]
}

export const industryPresets: Record<string, IndustryPreset> = {
  general: {
    name: 'General',
    description: 'Standard website',
    colors: {
      primary: { hue: 217, saturation: 80, lightness: 55 },   // Professional blue
      secondary: { hue: 262, saturation: 75, lightness: 58 }, // Purple accent
      tertiary: { hue: 168, saturation: 70, lightness: 42 }   // Teal highlight
    },
    styleType: 'modern',
    fonts: {
      heading: 'Inter',
      body: 'Inter'
    },
    characteristics: [
      'Clean, modern layouts',
      'Professional color scheme',
      'Clear typography hierarchy',
      'Responsive design patterns'
    ]
  },
  restaurant: {
    name: 'Restaurant',
    description: 'Reservations & ordering',
    colors: {
      primary: { hue: 25, saturation: 85, lightness: 50 },    // Warm orange (appetizing)
      secondary: { hue: 355, saturation: 75, lightness: 45 }, // Deep red (passion)
      tertiary: { hue: 45, saturation: 80, lightness: 55 }    // Golden yellow (warmth)
    },
    styleType: 'playful',
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter'
    },
    characteristics: [
      'Appetizing warm color palette',
      'Large food photography',
      'Clear call-to-action buttons',
      'Menu-focused layout'
    ]
  },
  nonprofit: {
    name: 'Non-Profit',
    description: 'Donations & campaigns',
    colors: {
      primary: { hue: 262, saturation: 70, lightness: 55 },   // Trustworthy purple
      secondary: { hue: 200, saturation: 75, lightness: 50 }, // Caring blue
      tertiary: { hue: 150, saturation: 65, lightness: 50 }   // Growth green
    },
    styleType: 'professional',
    fonts: {
      heading: 'Montserrat',
      body: 'Inter'
    },
    characteristics: [
      'Trustworthy color scheme',
      'Impact-focused storytelling',
      'Prominent donation CTAs',
      'Progress tracking visuals'
    ]
  },
  dental: {
    name: 'Dental',
    description: 'Appointments & records',
    colors: {
      primary: { hue: 195, saturation: 70, lightness: 55 },   // Clean blue (trust)
      secondary: { hue: 180, saturation: 60, lightness: 65 }, // Mint green (fresh)
      tertiary: { hue: 210, saturation: 65, lightness: 60 }   // Light blue (calm)
    },
    styleType: 'professional',
    fonts: {
      heading: 'Inter',
      body: 'Inter'
    },
    characteristics: [
      'Clean, clinical aesthetic',
      'Trustworthy blue tones',
      'Clear service descriptions',
      'Professional credibility'
    ]
  },
  ecommerce: {
    name: 'E-commerce',
    description: 'Shopping cart & checkout',
    colors: {
      primary: { hue: 220, saturation: 75, lightness: 55 },   // Trust blue
      secondary: { hue: 340, saturation: 70, lightness: 50 }, // Accent red (urgency)
      tertiary: { hue: 150, saturation: 65, lightness: 45 }   // Success green
    },
    styleType: 'modern',
    fonts: {
      heading: 'Poppins',
      body: 'Inter'
    },
    characteristics: [
      'Product-focused layouts',
      'Clear pricing displays',
      'Strong CTAs for conversions',
      'Grid-based product catalogs'
    ]
  },
  salon: {
    name: 'Salon/Spa',
    description: 'Booking & services',
    colors: {
      primary: { hue: 330, saturation: 70, lightness: 60 },   // Elegant pink
      secondary: { hue: 280, saturation: 60, lightness: 55 }, // Luxe purple
      tertiary: { hue: 40, saturation: 75, lightness: 60 }    // Gold accent
    },
    styleType: 'elegant',
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter'
    },
    characteristics: [
      'Luxurious, feminine palette',
      'Elegant serif typography',
      'Beauty-focused imagery',
      'Relaxing, spa-like feel'
    ]
  },
  fitness: {
    name: 'Fitness',
    description: 'Classes & memberships',
    colors: {
      primary: { hue: 0, saturation: 80, lightness: 50 },     // Energy red
      secondary: { hue: 30, saturation: 85, lightness: 55 },  // Vibrant orange
      tertiary: { hue: 200, saturation: 70, lightness: 50 }   // Action blue
    },
    styleType: 'creative',
    fonts: {
      heading: 'Montserrat',
      body: 'Inter'
    },
    characteristics: [
      'High-energy color scheme',
      'Bold, motivational typography',
      'Dynamic layouts',
      'Action-oriented design'
    ]
  },
  realestate: {
    name: 'Real Estate',
    description: 'Listings & tours',
    colors: {
      primary: { hue: 210, saturation: 70, lightness: 50 },   // Professional blue
      secondary: { hue: 30, saturation: 65, lightness: 55 },  // Warm gold
      tertiary: { hue: 150, saturation: 55, lightness: 45 }   // Growth green
    },
    styleType: 'professional',
    fonts: {
      heading: 'Montserrat',
      body: 'Inter'
    },
    characteristics: [
      'Luxury, professional feel',
      'Property-focused layouts',
      'Clear search filters',
      'Trust-building design'
    ]
  },
  education: {
    name: 'Education',
    description: 'Courses & enrollment',
    colors: {
      primary: { hue: 215, saturation: 75, lightness: 55 },   // Knowledge blue
      secondary: { hue: 45, saturation: 70, lightness: 55 },  // Optimistic yellow
      tertiary: { hue: 150, saturation: 60, lightness: 50 }   // Growth green
    },
    styleType: 'modern',
    fonts: {
      heading: 'Poppins',
      body: 'Inter'
    },
    characteristics: [
      'Academic, trustworthy colors',
      'Clear course organization',
      'Learning-focused layouts',
      'Student-friendly design'
    ]
  },
  healthcare: {
    name: 'Healthcare',
    description: 'Appointments & telemedicine',
    colors: {
      primary: { hue: 200, saturation: 70, lightness: 50 },   // Medical blue
      secondary: { hue: 170, saturation: 65, lightness: 55 }, // Healing teal
      tertiary: { hue: 150, saturation: 60, lightness: 50 }   // Health green
    },
    styleType: 'professional',
    fonts: {
      heading: 'Inter',
      body: 'Inter'
    },
    characteristics: [
      'Calming medical colors',
      'Professional credibility',
      'Patient-centered design',
      'Clear service information'
    ]
  }
}

export function getIndustryPreset(industry: string): IndustryPreset {
  return industryPresets[industry] || industryPresets.general
}
