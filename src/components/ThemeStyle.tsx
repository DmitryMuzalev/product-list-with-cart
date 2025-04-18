const theme = {
  color: {
    primary: "hsl(14, 86%, 42%)",
    secondary: "hsl(159, 69%, 38%)",

    white: "hsl(0, 0%, 100%)",
    natural_50: "hsl(20, 50%, 98%)",
    natural_100: "hsl(13, 31%, 94%)",
    natural_300: "hsl(14, 25%, 72%)",
    natural_400: "hsl(7, 20%, 60%)",
    natural_500: "hsl(12, 20%, 44%)",
    natural_800: "hsl(14, 85%, 32%)",
    natural_900: "hsl(14, 65%, 9%)",
  },

  font: {
    family: "Red Hat Text, sans-serif",
    size: "16px",
    weight: {
      normal: 400,
      semi_bold: 600,
      bold: 700,
    },
  },

  border: "1px solid transparent",
  borderRadius: {
    small: "0.5rem",
    circle: "50%",
    full: "1000px",
  },

  mediaQuery: {
    mobile: "max-width: 576px",
    tablet: "max-width: 768px",
    small_desktop: "max-width: 992px",
    desktop: "max-width: 1280px",
  },

  transitionDuration: "0.3s",
};

export { theme };
