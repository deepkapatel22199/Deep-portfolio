import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App (){
    return (
        <BrowserRouter>
        <Navbar/>
        <div id="home">
            <Home />
        </div>
        <div id="about">
            <About />
        </div>
        <div id="projects">
            <Projects />
        </div>
        </BrowserRouter>
        );
    }
    export default App;
