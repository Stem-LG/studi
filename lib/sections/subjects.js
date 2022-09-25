import SubjectCard from "../components/subjectcard";
import { Grid } from "@mui/material";

const tempSectionsData = [
    { name: "Math", image: "/assets/pictures/math.svg" },
    { name: "Algorithms", image: "/assets/pictures/algo.png" },
    { name: "Python", image: "/assets/pictures/python.png" },
    { name: "English", image: "/assets/pictures/english.png" },
];

export default function Subjects() {
    
    return <Grid container spacing={2} justifyContent="center" mt={1}>
        {tempSectionsData.map((subject, key) => {
            return (
                <Grid item key={key}>
                    <SubjectCard
                        key={key}
                        title={subject.name}
                        image={subject.image}
                    />
                </Grid>
            );
        })}
    </Grid>;
}
