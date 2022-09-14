import "./App.css";
import logobuildy from "./assets/images/logo-buildy.svg";
import Navigation from "./components/nav.jsx";
import fond from "./assets/images/bg-main.png";
import Fiche from "./components/fichetype.jsx";
import data from "./data/index.js";
import Button from "./components/button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import planeteimg from "./assets/images/home-planete.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logobuildy} width="220px" alt="logo" />
        <div id="containernav">
          <Navigation />
        </div>
      </header>
      <main>
        <Fiche
          firsttext={data.firsttext}
          title={data.title}
          title2={data.title2}
          title3={data.title3}
          content={data.content}
          content2={data.content2}
          content3={data.content3}
          content4={data.content4}
          taille="50%"
        ></Fiche>
        <div id="btn-container">
          <Button
            text="Parlons en !"
            icon={<FontAwesomeIcon icon={faArrowRight} />}
          />
          <Button
            text="En savoir +"
            bgcolor="white"
            color="#2FE0A7"
            bordercolor="#2FE0A7"
          />
        </div>
        <div id="secondcontainer">
          <img src={planeteimg} height="auto" />
          <div id="btn-content-container">
            <Fiche
              id="test"
              firsttext={data.secondtext}
              title={data.title4}
              title2={data.title5}
              content3={data.content5}
              taille="70%"
            />
            <Button
              text="Pour quels bénéfices ?"
              icon={<FontAwesomeIcon icon={faArrowRight} />}
            />
          </div>
        </div>
      </main>
      <div id="bg-container">
        <img id="fond" src={fond} width="780px" alt="fond" />
      </div>
    </div>
  );
}

export default App;
