import {Card, CardActionArea, CardMedia, Typography, CardContent} from "@mui/material"
import Link from "next/link";

export default function SubjectCard(props) {
    return (
        <Card
            sx={{
                width: 200,
            }}
        >   
            <Link href={props.path}>
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
            </Link>
        </Card>
    );
}
