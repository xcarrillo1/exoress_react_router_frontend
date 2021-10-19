import {Link} from "react-router-dom";

function Header(props) {
    // INLINE STLE FOR THE NAV TAG
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid #66fcf1",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };

    return (
        <header>
            <h1>My Porfolio Page</h1>
            <nav style ={navStyle}>
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/about">
                    <div>ABOUT</div>
                </Link>
                <Link to="/projects">
                    <div>PORJECTS</div>
                </Link>
            </nav>
        </header>
    )
};

export default Header;