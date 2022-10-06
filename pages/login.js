import {
    Box,
    useTheme,
    Typography,
    TextField,
    Grid,
    Button,
} from "@mui/material";
import { useState } from "react";

export default function LoginPage() {
    const tempdata = {
        name: "louay ghanney",
        username: "stem",
        pass: "pass1234",
    };

    const [loggedIn, setLoggedIn] = useState(false);

    const username = localStorage.getItem("username");
    const userpass = localStorage.getItem("pass");

    if (username == tempdata.username && userpass == tempdata.pass) {
        setLoggedIn(true);
    }

    const theme = useTheme();

    return (
        <Box
        minHeight="100vh"
        
        sx={{ bgcolor: theme.palette.background.default, spacing:0 }}
            
        >
            <Box height={{ xs: "56px", sm: "64px" }} />

            {loggedIn ? (
                <>
                    <Typography variant="h2" color="priamry">
                        logged in as {tempdata.name}
                    </Typography>
                </>
            ) : (
                <>
                    <Grid container direction="column">
                        <Grid item >
                            <TextField label="username" />
                        </Grid>
                        <Grid item>
                            <TextField label="password" />
                        </Grid>
                        <Grid item>
                            <Button>Login</Button>
                        </Grid>
                    </Grid>
                </>
            )}
        </Box>
    );
}
