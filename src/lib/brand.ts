// trellis.pet — brand tokens v1.0

export const colors = {
  sprout:      "#4ade80",
  forest:      "#1d9e75",
  deepForest:  "#0f6e56",
  cream:       "#f5f0e8",
  bark:        "#2d4a3e",
  charcoal:    "#1a2e25",
  mist:        "#e8f5ee",
  sage:        "#8ecbab",
  warmGrey:    "#c4bfb5",
  ink:         "#0d1117",
  amber:       "#f59e0b",
  danger:      "#ef4444",
  info:        "#3b82f6",
} as const;

export const typography = {
  sans: "'DM Sans', -apple-system, 'Inter', sans-serif",
  mono: "'DM Mono', 'SF Mono', 'Fira Mono', monospace",
  display: { size: "52px",  weight: 700, tracking: "-0.03em", leading: 1.1  },
  h1:      { size: "40px",  weight: 700, tracking: "-0.02em", leading: 1.15 },
  h2:      { size: "28px",  weight: 700, tracking: "-0.015em",leading: 1.2  },
  h3:      { size: "20px",  weight: 600, tracking: "-0.01em", leading: 1.3  },
  body:    { size: "16px",  weight: 400, tracking: "-0.01em", leading: 1.65 },
  small:   { size: "13px",  weight: 400, tracking: "0em",     leading: 1.5  },
  label:   { size: "11px",  weight: 500, tracking: "0.08em",  leading: 1.4  },
  code:    { size: "13px",  weight: 400, tracking: "0em",     leading: 1.6  },
} as const;

export const radius = {
  sm:   "4px",
  md:   "8px",
  lg:   "12px",
  xl:   "20px",
  full: "9999px",
} as const;

export const spacing = {
  1: "4px",  2: "8px",  3: "12px", 4: "16px",
  5: "20px", 6: "24px", 8: "32px", 10: "40px",
  12: "48px", 16: "64px", 20: "80px", 24: "96px",
} as const;

export const semantic = {
  bgDark:       colors.ink,
  bgLight:      colors.cream,
  bgSurface:    colors.bark,
  bgMuted:      colors.mist,
  textOnDark:   colors.cream,
  textOnLight:  colors.charcoal,
  textMuted:    colors.warmGrey,
  textCode:     colors.sage,
  primary:      colors.sprout,
  primaryHover: colors.forest,
  primaryText:  "#0a3520",
  borderDark:   "rgba(74,222,128,0.12)",
  borderLight:  "rgba(26,46,37,0.1)",
} as const;

export const tailwindTokens = {
  sprout:        "#4ade80",
  forest:        "#1d9e75",
  "deep-forest": "#0f6e56",
  cream:         "#f5f0e8",
  bark:          "#2d4a3e",
  charcoal:      "#1a2e25",
  mist:          "#e8f5ee",
  sage:          "#8ecbab",
  "warm-grey":   "#c4bfb5",
  ink:           "#0d1117",
} as const;

export default { colors, typography, radius, spacing, semantic, tailwindTokens };
