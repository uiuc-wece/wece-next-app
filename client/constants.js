import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    text: {
      primary: "#fff",
      secondary: "#ff6b6b",
    },
    background: { default: "#022b3a", paper: "#0e3e4f" },
    divider: "#ace8ac",
  },
});

export const base_url = process.env.API_URL;
