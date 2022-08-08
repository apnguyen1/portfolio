import {Navigation} from "./components/Navigation"
import {Introduction} from "./components/Introduction";
import style from "./styles/App.module.css"
import {Projects} from "./components/Projects"

function App() {
  return (
      <div >
          <div className={style.container}>
              <Navigation/>
              <Introduction/>
          </div>
          <div className={style.colorContainer}>
              <Projects/>
          </div>
      </div>

  );
}

export {App};
