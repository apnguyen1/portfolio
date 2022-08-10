import {Navigation} from "./components/Navigation"
import {Introduction} from "./components/Introduction";
import {Container} from "react-bootstrap";
import {About} from "./components/About";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";


function App() {
  return (
      <Container>
          <Navigation/>
          <Introduction/>
          <About/>
          <Projects/>
          <Contact/>
      </Container>

  );
}

export {App};
