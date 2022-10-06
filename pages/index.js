import Subjects from "../lib/sections/subjects";
import { Box, useTheme } from "@mui/material";
import TopAppBar from "../lib/components/appbar";
import FloatingButton from "../lib/components/fab";
import LoginPage from "./login";

export default function Home() {

    const isLogged = false

    const theme = useTheme();
    return (
        <Box
            sx={{ bgcolor: theme.palette.background.default }}
            minHeight="100vh"
        >
            <Box height={{ xs: "56px", sm: "64px" }} />

            {isLogged?<Subjects />:<LoginPage/>}
        </Box>
    );
}
