import {Navigation} from "./components/Navigation"
import {Introduction} from "./components/Introduction";
import style from "./styles/App.module.css"
import {Container} from "react-bootstrap";
import {About} from "./components/About";
import {Projects} from "./components/Projects";


function App() {
  return (
      <Container>
          <Navigation/>
          <Introduction/>
          <About/>
          <Projects/>
      </Container>

  );
}

export {App};
