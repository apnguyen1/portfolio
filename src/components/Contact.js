import style from "../styles/Contact.module.css"
import {Button, Image} from "react-bootstrap";


function Contact() {
    return (
        <div className={style.container}>
            <h3 className={style.title} id={"contact"}>III. Let's Connect!</h3>
            <p className={style.desc}>Whether you have a question or just want to say hi, feel free to always contact me!
            My inbox is always open and I'll try to always get back to you as soon as I can. I'm also readily available
            through my LinkedIn and other socials!</p>

            <button className={style.button} href={"mailto:andrewn1@uw.edu"} >
                <p>Say Hi!</p>
            </button>
        </div>
    );
}

export {Contact}