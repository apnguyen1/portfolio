import style from "../styles/Projects.module.css"
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import hangman from "../assets/hangman.png"
import map from "../assets/campus.png"
import farm from "../assets/farm.png"
import tbd from "../assets/tbd.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import {Icon, Link, Stack} from "@mui/material";


function Projects() {
    const items = [
        {
            'title': 'Hangman',
            'image': hangman,
            'order': 1,
            'desc': "A web application that allow users to play a game of hangman. A project inspired by" +
                " my curiosity in learning Python and Flask. The game starts off by the player choosing a " +
                "dictionary that narrows the AI choices to words that relate to the player's chosen dictionary." +
                " The game is then played like any other game of hangman and if I had time to continue working " +
                "on this project, I would look into adding a record of the user's previous games.",
            'github' : 'https://github.com/apnguyen1/Hangman/tree/main',
            'website': 'http://andrew-nguyen-hangman.herokuapp.com/',
        },
        {
            'title': 'UW Campus',
            'image': map,
            'order': 0,
            'desc': "A map of my university's campus! This web application allows users' " +
                "to choose two buildings on the campus and it'll draw a route of the shortest" +
                " most optimal path between them. Originally a final project back in Spring quarter 2022" +
                " for my CSE 331 class, I took up this project again and redesigned the entire frontend " +
                "to make the user's experience feel more smooth and intuitive. I also converted the entire" +
                " backend code from java to Kotlin so I could challenge myself to learn a new language but also " +
                "understand parts of the original code that I didn't understand before. ",
            'github' : 'https://github.com/apnguyen1/uw-routes',
            'website': 'https://uw-campus.herokuapp.com/',
        },
        {
            'title': 'Percussion farms',
            'image': farm,
            'order': 1,
            'desc' : "A front-end project where I helped develop a local Washingtonian farm's website with " +
                "other student developers. It was my first project that involved working with other developers " +
                "so I learned a lot about using git and team collaboration. ",
            'github' : 'https://github.com/DUBvelopers-UW/percussion-farms',
            'website' : 'https://dubvelopers-uw.github.io/percussion-farms/',
        },
        {
            'title': "More to Come!",
            'image': tbd,
            'order': 0,
            'desc': "Stay tune. There's a few more projects I'm working on!",
            'github' : 'https://github.com/apnguyen1',
            'website': '#',
        }
    ];

    const rows = Object.keys(items).map((item, i) =>
        <Project order={items[i].order}
                 title={items[i].title}
                 image={items[i].image}
                 desc={items[i].desc}
                 key={item}
                 website={items[i].website}/>
    );

    const cards = Object.keys(items).map((item, i) =>
        <ProjectCard key={i}
                     title={items[i].title}
                     image={items[i].image}
                     desc={items[i].desc}
                     website={items[i].website}/>
    );


    return(
        <div className={style.container}>
            <h3 className={style.title} id={"projects"}>II. The Projects</h3>

            <Stack gap={10}>
                {rows}
                {cards}
            </Stack>
        </div>
    );
}

function Project(props) {
    return(
        <Row className={style.row}>
            <Col className={style.content} xs={{order: props.order}} sm={7}>
                <h3 className={style.projectTitle}>
                    {props.title}
                </h3>
                <p className={style.projectDesc}>{props.desc}
                </p>
                <div className={style.icons}>
                    <Link className={style.icon} target={"#"} href={props.website}>
                        <GitHubIcon color={"secondary"} fontSize={"large"}/>
                    </Link>
                    <Link href={props.website} target={"#"} className={style.icon} >
                        <OpenInBrowserIcon fontSize={"large"} color={"secondary"}/>
                    </Link>
                </div>

            </Col>
            <Col xs={{order: props.order - 1}} sm={5} className={style.image}>
                <Image className={style.projectImg} thumbnail={true} src={props.image} alt={"picture of " + props.title} fluid={true}/>
            </Col>
        </Row>
    );
}

function ProjectCard(props) {
    return(
        <Card className={style.card}>
            <Card.Img variant="top" src={props.image} className={style.projectImg}/>
            <Card.Body>
                <Card.Title class={style.projectTitle}>{props.title}</Card.Title>
                <Card.Text class={style.projectDesc}>
                    {props.desc}
                </Card.Text>
                <div>
                    <Card.Link href={props.website} target={"#"} className={style.icon} >
                        <GitHubIcon fontSize={"large"} color={"secondary"}/>
                    </Card.Link>
                    <Card.Link href={props.website} target={"#"} className={style.icon} >
                        <OpenInBrowserIcon fontSize={"large"} color={"secondary"}/>
                    </Card.Link>
                </div>
            </Card.Body>
        </Card>
    );
}


export {Projects}