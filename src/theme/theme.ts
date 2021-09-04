import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#BBCDE5",
    },
    secondary: {
      main: "#F3E9D2",
    },
    error: {
      main: "#c62828",
    },
    warning: {
      main: "#e65100",
    },
    background: {
      default: "#222222",
      paper: "#333333",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
    },
    MuiIconButton: {
      defaultProps: { color: "primary" },
    },
  },
});

export const theme = responsiveFontSizes(darkTheme);

// primary: {
//       main: "#23B5D3",
//     },
//     secondary: {
//       main: "#0f0",
//     },
//     background: {
//       default: "#071013",
//     },
