import {
    Box,
    useTheme,
    Typography,
    Card,
    CardMedia,
    CardActionArea,
    CardContent,
    Grid,
} from "@mui/material";
import { useRouter } from "next/router";

export default function Subject() {
    const data = [
        {
            subject: "math",
            chapters: [
                {
                    name: "chapter1",
                    nbr_lessons: 12,
                    image: "/assets/pictures/algo.png",
                },
                {
                    name: "chapter2",
                    nbr_lessons: 13,
                    image: "/assets/pictures/math.svg",
                },
                {
                    name: "chapter3",
                    nbr_lessons: 14,
                    image: "/assets/pictures/python.png",
                },
            ],
        },
        {
            subject: "algo",
            chapters: [
                {
                    name: "chapter1",
                    nbr_lessons: 12,
                    image: "/assets/pictures/algo.png",
                },
                {
                    name: "chapter2",
                    nbr_lessons: 13,
                    image: "/assets/pictures/math.svg",
                },
                {
                    name: "chapter3",
                    nbr_lessons: 14,
                    image: "/assets/pictures/python.png",
                },
            ],
        },
        {
            subject: "python",
            chapters: [
                {
                    name: "chapter1",
                    nbr_lessons: 12,
                    image: "/assets/pictures/algo.png",
                },
                {
                    name: "chapter2",
                    nbr_lessons: 13,
                    image: "/assets/pictures/math.svg",
                },
                {
                    name: "chapter3",
                    nbr_lessons: 14,
                    image: "/assets/pictures/python.png",
                },
            ],
        },
        {
            subject: "English",
            chapters: [
                {
                    name: "chapter1",
                    nbr_lessons: 12,
                    image: "/assets/pictures/algo.png",
                },
                {
                    name: "chapter2",
                    nbr_lessons: 13,
                    image: "/assets/pictures/math.svg",
                },
                {
                    name: "chapter3",
                    nbr_lessons: 14,
                    image: "/assets/pictures/python.png",
                },
            ],
        },
    ];

    const router = useRouter();

    const { subjectId } = router.query;

    const theme = useTheme();
    
    const subjectInfo = {
        subject: "python",
        chapters: [
            {
                name: "chapter1",
                nbr_lessons: 12,
                image: "/assets/pictures/algo.png",
            },
            {
                name: "chapter2",
                nbr_lessons: 13,
                image: "/assets/pictures/math.svg",
            },
            {
                name: "chapter3",
                nbr_lessons: 14,
                image: "/assets/pictures/python.png",
            },
        ],
    };

    return (
        <>
            <Box
                sx={{ bgcolor: theme.palette.background.default }}
                minHeight="100vh"
            >
                <Box height={{ xs: "56px", sm: "64px" }} />
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h1"
                            color="primary"
                            sx={{ textAlign: "center" }}
                        >
                            {subjectInfo.subject}
                        </Typography>
                    </Grid>
                    {/* {subjectInfo.chapters.map((chapter,key) => (
                        <Grid item key={key}>
                            <ChapterCard
                                name={chapter.name}
                                nbr_lessons={chapter.nbr_lessons}
                                image={chapter.image}
                            />
                        </Grid>
                    ))} */}
                    {console.log("item rendered")}
                </Grid>
            </Box>
        </>
    );
}

function ChapterCard(props) {
    return (
        <Card
            sx={{
                width: 200,
            }}
        >
            <CardActionArea
                sx={{
                    padding: 1,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <CardMedia
                    sx={{ width: 100, height: 100 }}
                    image={props.image}
                />
                <CardContent>
                    <Typography variant="h6" color="initial">
                        {props.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="initial"
                        sx={{ textAlign: "center" }}
                    >
                        lessons: {props.nbr_lessons}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
