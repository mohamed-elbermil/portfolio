import "./App.css";
import "./components/Navbar/Navbar.module.css";
import "./styles/globales.css";
import { Header } from "./components/Header/Header";
import Main from "./components/Main/Main";
import SectionExperiences from "./components/SectionExperiences/SectionExperiences"


function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
