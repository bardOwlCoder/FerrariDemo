import { createTheme } from "@mui/material";
const theme = createTheme({
    palette: {
        primary: {
            main: "#da291c",
        },
        secondary: {
            main: "#181818",
        },
        background: {
            main: "#f5f5f5",
        },
    },
    typography: {
        fontFamily: "notosans-regular",
        fontSize: 16,
        fontWeightBold: 500,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});


export default theme