import './App.css';
// IMPORT COMPONENTS
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import {Route, Routes} from "react-router-dom";
// IMPORT PAGES
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Projects from "./pages/Projects.js";

export default function App() {
  // URL SHOULD HAVE HEROKU URL FOR YOUR BACKEND, INCLUDE THE TRAILING SLASH
  // const URL = "https://portfolio-testing123.herokuapp.com/";
  const URL = "http://localhost:4000/"
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<About URL={URL} />}/>
        <Route path="/projects" element={<Projects URL={URL} />}/>
        {/* <Route path="/contact" element={<Contact />}/> */}
      </Routes>
      <Footer />
    </div>
  );
}