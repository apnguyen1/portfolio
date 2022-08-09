import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedIn } from '@mui/icons-material';
import { Icon, Link } from "@mui/material"
import style from "../styles/Introduction.module.css"

function Introduction(props) {
    return (
        <div className={style.container}>
            <p className={style.greeting}>Hi, I'm</p>
            <h1 className={style.name}>Andrew Nguyen</h1>
            <p className={style.desc}>I'm a Computer Science student at the University of Washington, Seattle Campus. I love technology
            and building some :)</p>
            <div className={style.icons}>
                <Link className={style.icon} target={"#"} href={"https://github.com/apnguyen1"}>
                    <GitHubIcon className={style.icon}/>
                </Link>
                <Link className={style.icon} target={"#"} href={"https://www.linkedin.com/in/andrew-nguyen-b5a699194/"}>
                    <LinkedIn className={style.icon}/>
                </Link>
            </div>
        </div>
    )
}

export {Introduction}