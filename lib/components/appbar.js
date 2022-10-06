import {
    AppBar,
    Toolbar,
    useTheme,
    Typography,
    Grid,
    Button,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";

export default function TopAppBar() {
    const theme = useTheme();

    const pages = [
        {
            title: "home",
            icon: "",
            link: "/",
        },
        {
            title: "lessons",
            icon: "",
            link: "/lessons",
        },
    ];

    return (
        <AppBar position="fixed">
            <Toolbar
                sx={{
                    justifyContent: "space-between",
                    bgcolor: theme.palette.background.default,
                    boxShadow: "3px white",
                }}
            >
                <Logo />
                <Trailing pages={pages} />
            </Toolbar>
        </AppBar>
    );
}

function Logo() {
    const theme = useTheme();
    return (
        <Typography
            variant="h6"
            sx={{
                border: 0.8,
                borderWidth: 4,
                p: 0.5,
                borderRadius: "10px 0 10px 0",
                width: 150,
                display: "flex",
                justifyContent: "center",
            }}
            fontWeight="bold"
            color="primary"
        >
            Studi
        </Typography>
    );
}

function Trailing(props) {
    return (
        <Grid
            container
            direction="row"
            width="auto"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
        >
            {props.pages.map((page, key) => {
                return (
                    <Grid item key={key}>
                        <Link href={page.link}>
                            <Button
                                variant="contained"
                                color="primary"
                                key={key}
                                sx={{ borderRadius: "10px 0 10px 0" }}
                            >
                                {page.title}
                            </Button>
                        </Link>
                    </Grid>
                );
            })}
            <Grid item>
                <UserDropDown />
            </Grid>
        </Grid>
    );
}

function UserDropDown(props) {
    const [anchorEl, setAnchorEl] = useState(null);

    const options = [
        { title: "Profile", icon: "", link: "" },
        { title: "Settings", icon: "", link: "" },
        { title: "Logout", icon: "", link: "" },
    ];

    return (
        <>
            <IconButton
                color="primary"
                sx={{ padding: "2px" }}
                onClick={(e) => {
                    setAnchorEl(e.currentTarget);
                }}
            >
                <MdAccountCircle size={30} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {options.map((option, key) => {
                    return (
                        <MenuItem
                            key={key}
                            onClick={() => {
                                setAnchorEl(null);
                            }}
                        >
                            {option.icon} {option.title}
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
}
