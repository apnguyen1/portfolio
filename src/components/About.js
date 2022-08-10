import style from "../styles/About.module.css"
import {Col, Container, Image, Row} from "react-bootstrap";
import profilePic from "../assets/profilepic.JPG"

function About() {
    return(
        <Container fluid bsPrefix={'container'}>
            <h3 id="about" className={style.title}>I. About me</h3>
            <Row>
                <Col md={8} className={style.desc}>
                    <p >Hello! I am currently in my second year as an undergraduate at the University of
                        Washington, Seattle campus. I'm also seeking experience as a software developer/engineer
                        to help develop my professional and technical skills in the industry.
                        <br/>
                        <br/>
                        As a person, I would describe myself as easygoing and friendly. But if needed, I can take up leadership and
                        bring a voice to the table.
                        <br/>
                        <br/>
                        As a developer, I'm persistent and diligent. If assigned a project, I'll admit I won't know everything. However,
                        I'll strive to always find a path that will lead to  exceptional results, so I can always take pride in my work.
                    </p>
                </Col>
                <Col md={4} className={style["profile"]}>
                    <Image className={style["profile-pic"]} thumbnail={true} alt={"picture of Andrew Nguyen"} fluid={true} src={profilePic}/>

                </Col>
            </Row>
        </Container>
    )
}

export {About}