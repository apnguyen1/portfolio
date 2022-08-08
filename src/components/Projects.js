import {Box} from "@mui/material";
import style from "../styles/Projects.module.css"

function Projects() {
    return(
        <div className={style.container}>
            <h1 className={style.title}>Some of my builds</h1>
            <div className={style.projects}>
                <Project main={"#F5F6ED"} secondary={"D5AA72"}/>
            </div>

        </div>
    );
}

function Project(props) {
    return(
        <div className={style.project}>
            <Box sx={{
                width: 300,
                height: 300,
                backgroundColor: props.main,
                '&:hover': {
                    backgroundColor: props.secondary,
                    opacity: [.9,.8,.7],
                }
            }}
            />
        </div>
    );
}

export {Projects}