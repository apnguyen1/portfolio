import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import style from "../styles/Navigation.module.css"



function Navigation() {
    const items = {'about': 'I. About', 'projects': 'II. Projects', 'contact': 'III. Contact'};



    const components = Object.keys(items).map(key =>
        <NavItem className={style.item} desc={items[key]} name={key}/>
    )

    return(
        <Navbar fixed={"top"} className={style.top} expand={"lg"} collapseOnSelect={true} >
            <Container className={"justify-content-between"}>
                <div>
                    <Navbar.Brand className={style.brand} href="#home">Andrew Nguyen</Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle/>
                    <Navbar.Offcanvas placement={"end"}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Andrew Nguyen</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className={"justify-content-end"}>
                                {components}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </div>

            </Container>
        </Navbar>
    )
}

function NavItem(props) {
    return(
        <Nav.Item className={style.item}>
            <Nav.Link href={'#' + props.name} className={style.itemDesc}>{props.desc}</Nav.Link>
         </Nav.Item>
        );

}

export {Navigation}