import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '8rem'
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.4rem",
    },
    h6: {
      fontSize: "0.8rem",
      fontWeight: "600",
      letterSpacing: "1px",
    },
    body1: {
      fontSize: "0.7rem",
    },
    overline: {
      fontSize: "inherit",
      textTransform: "inherit",
      fontWeight: "900",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "white",
          "&:disabled": {
            color: "white",
            opacity: 0.4,
          },
        },
      },
    },
  },
});

export default theme;
