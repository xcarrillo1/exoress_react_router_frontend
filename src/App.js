import './App.css';
import "./styles.css"
// IMPORT COMPONENTS
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import {Route, Routes} from "react-router-dom";
// IMPORT PAGES
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";

function App() {
  // URL SHOULD HAVE HEROKU URL FOR YOUR BACKEND, INCLUDE THE TRAILING SLASH
  const URL = "https://portfolio-testing123.herokuapp.com/";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects URL={URL} />}/>
        <Route path="/about" element={<About URL={URL} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
