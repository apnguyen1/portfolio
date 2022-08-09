import style from "../styles/Projects.module.css"
import {Col, Container, Image, Row} from "react-bootstrap";
import hangman from "../assets/hangmanTN.png"
import map from "../assets/campusmapsTN.png"
import {Stack} from "@mui/material";

function Projects() {
    const items = [
        {
            'title': 'Hangman',
            'image': hangman,
            'order': 0,
            'desc': 'A web application that allow users to play a game of hangman'
        },
        {
            'title': 'UW Campus',
            'image': map,
            'order': 1,
            'desc': 'A web application that allow users to play a game of hangman'
        }
    ]


    return(
        <div>
            <h3 className={style.title} id={"projects"}>II. Peep the Projects</h3>

            <Stack gap={5}>
                <Project order={0}/>
                <Project order={1}/>
                <Project order={0}/>
            </Stack>
        </div>
    );
}

function Project(props) {
    return(
        <Row>
            <Col className={style.content} xs={{order: props.order}} lg={6}>
                <Row className={style.projectTitle}>Hangman</Row>
                <Row className={style.projectDesc}>A web application that allows users' to play a game of hangman</Row>
            </Col>
            <Col xs={{order: props.order - 1}} lg={6}>
                <Image className={style.projectImg} src={hangman} alt={"picture of hangman"} fluid={true}/>
            </Col>
        </Row>
    )
}

export {Projects}