import { Box, useTheme } from "@mui/material";
import { useRouter } from "next/router";


export default function Lessons() {
    const router = useRouter();
    const theme = useTheme()

    const { subjectId } = router.query;

    return (
        <>
            <Box
                sx={{ bgcolor: theme.palette.background.default }}
                minHeight="100vh"
            >
                <Box height={{ xs: "56px", sm: "64px" }} />
                {subjectId}
            </Box>
        </>
    );
}
