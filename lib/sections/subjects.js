import SubjectCard from "../components/subjectcard";
import { Grid } from "@mui/material";

const tempSectionsData = [
    {
        name: "Math",
        image: "/assets/pictures/math.svg",
        path: "/subject/math",
        path: "/subject/math",
    },
    {
        name: "Algorithms",
        image: "/assets/pictures/algo.png",
        path: "/subject/algo",
    },
    {
        name: "Python",
        image: "/assets/pictures/python.png",
        path: "/subject/python",
    },
    {
        name: "English",
        image: "/assets/pictures/english.png",
        path: "/subject/english",
    },
];

export default function Subjects() {
    return (
        <Grid container spacing={2} justifyContent="center" mt={1}>
            {tempSectionsData.map((subject, key) => {
                return (
                    <Grid item key={key}>
                        <SubjectCard
                            key={key}
                            title={subject.name}
                            image={subject.image}
                            path={subject.path}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
}
