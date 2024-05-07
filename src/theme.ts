import { extendTheme } from "@chakra-ui/react";

const theme = {
  fonts: {
    heading: "'SF Mono Thin'",
    body: '"Arial", sans-serif',
  },
  colors: {
    main: {
      bg: "#9747FF",
      text: "#000",
      card: "#0A99FF",
      tab: "#eff1ff",
      light: "#fff",
      tab_underline: "#2240e0",
    },
  },
  sizes: {
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "32px",
      bg: "#9747FF",
    },
  },
};

export default extendTheme(theme);
