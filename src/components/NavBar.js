import {Link} from "react-router-dom";

export default function NavBar(props) {
    return (
        <header>
            <nav className="NavBar">
                <Link to="/">
                    <div>ABOUT ME</div>
                </Link>
                <Link to="/projects">
                    <div>MY PROJECTS</div>
                </Link>
                <a href="/files/XavierCarrilloResume.pdf" download>
                    <div>MY RESUME</div>
                </a>
            </nav>
        </header>
    )
};