import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#f8f8fd",
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#555",
            paper: "#666"
        },
    },
});

export { lightTheme, darkTheme };
