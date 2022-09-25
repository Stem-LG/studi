import {Card, CardActionArea, CardMedia, Typography, CardContent} from "@mui/material"

export default function SubjectCard(props) {
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
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
