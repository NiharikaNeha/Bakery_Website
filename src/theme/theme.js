const theme = {
  colors: {
    /* Brand Identity */
    primary: "#B86B3E", // Warm baked brown
    primaryLight: "#D8A47F",
    primaryDark: "#8F4E2A",

    secondary: "#F6E7D8", // Soft cream
    accent: "#E8A23A", // Golden honey

    /* Backgrounds */
    background: "#FFF8F1", // Clean bakery white
    surface: "#FFFFFF",
    surfaceMuted: "#FDF0E5",

    /* Text */
    textPrimary: "#2B1A12", // Dark cocoa
    textSecondary: "#5A3E2B",
    textMuted: "#8C6A54",

    /* Borders & Dividers */
    border: "#EAD6C4",

    /* States */
    success: "#2FBF71",
    warning: "#F4B400",
    error: "#E5533D",

    /* Overlay */
    overlay: "rgba(0, 0, 0, 0.45)",
  },

  typography: {
    fontFamily: {
      heading: "'Playfair Display', serif",
      body: "'Inter', sans-serif",
    },

    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },

    lineHeight: {
      tight: "1.2",
      normal: "1.5",
      relaxed: "1.75",
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  radius: {
    xs: "4px",
    sm: "8px",
    md: "14px",
    lg: "22px",
    xl: "32px",
    pill: "9999px",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "40px",
    "2xl": "64px",
    "3xl": "96px",
  },

  shadows: {
    soft: "0 4px 12px rgba(0, 0, 0, 0.06)",
    medium: "0 10px 30px rgba(0, 0, 0, 0.08)",
    strong: "0 20px 50px rgba(0, 0, 0, 0.12)",
  },

  animation: {
    easeSmooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    fast: "0.2s",
    normal: "0.4s",
    slow: "0.6s",
  },

  layout: {
    maxWidth: "1280px",
    headerHeight: "80px",
  },
};

export default theme;
