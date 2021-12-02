import {Link} from "react-router-dom";

export default function NavBar(props) {
    return (
        <header>
            <nav className="NavBar">
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/projects">
                    <div>PORJECTS</div>
                </Link>
                <Link to="/about">
                    <div>ABOUT</div>
                </Link>
            </nav>
        </header>
    )
};