import { Rubik } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const rubik = Rubik({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const primaryColour = "#66CCCC";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryColour,
    },
  },
  typography: {
    fontFamily: rubik.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
