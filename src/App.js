import './App.css';

// IMPORT COMPONENTS
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import {Route, Switch} from "react-router-dom";
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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
