import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Head from "next/head";
import { lightTheme, darkTheme } from "../lib/theme";
import { useEffect, useState, useContext } from "react";
import DarkModeContext from "../lib/contexts/darkmode";
import { ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }) {
    const [ isDarkMode, setDarkMode ] = useState(false);

    useEffect(() => {
        setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }, []);

    return (
        <>
            <Head>
                <title>Studi</title>
                <meta
                    name="description"
                    content="Lessons organizer for students"
                />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                ></meta>
            </Head>
            <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
                <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </DarkModeContext.Provider>
        </>
    );
}

export default MyApp;
