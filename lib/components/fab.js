import { Box,Button,Fab } from "@mui/material";
import { useContext } from "react";
import DarkModeContext from "../contexts/darkmode";
import { FaMoon, FaSun } from "react-icons/fa";
import {MdOutlineTranslate,MdClose} from "react-icons/md"
import { useState } from "react";

export default function FloatingButton(props) {
    const { isDarkMode, setDarkMode } = useContext(DarkModeContext);
    const [LangChooserOpen,setLangChooserOpen] = useState(false)

    //to replace later
    const langs = [
        { name: "Русские", locale: "ru" },
        { name: "English", locale: "en" },
    ];
    return (
        <Box
            sx={{ position: "fixed", bottom: 16, right: 16, gap: 1 }}
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
        >
            {langs.map((lang,key)=>{
                return <Button
                    key={key}
                    variant="contained"
                    size="small"
                    sx={{
                        borderRadius: 100,
                        display: LangChooserOpen ? "block" : "none",
                    }}
                >
                    {lang.name}
                </Button>;
            })}
            <Fab
                size="small"
                color="primary"
                onClick={() => setLangChooserOpen(!LangChooserOpen)}
            >
                {LangChooserOpen?<MdClose/>:<MdOutlineTranslate />}
            </Fab>
            <Fab
                color="primary"
                size="large"
                onClick={() => setDarkMode(!isDarkMode)}
            >
                {isDarkMode ? <FaMoon size={25} /> : <FaSun size={25} />}
            </Fab>
        </Box>
    );
}
