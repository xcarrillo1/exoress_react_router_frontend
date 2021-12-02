import {useState, useEffect} from "react";

export default function About(props) {
    // CREATE STATE TO HOLD ABOUT DATA
    const [about, setAbout] = useState(null);
    // CREATE FUNCTION TO MAKE AN API CALL
    const getAboutData = async () => {
        // MAKE AN API CALL AND GET RESPONSE
        const response = await fetch(props.URL + "about");
        // TURN RESPONSE INTO JAVASCRIPT OBJECT
        const data = await response.json();
        // SET THE ABOUT STATE TO THE DATA
        setAbout(data);
    };
    // MAKE AN INITIAL CALL FOR THE DATA INSIDE A useEFFECT, SO IT ONLY HAPPENS ONCE ON THE COMPONENT LOAD
    useEffect(() => getAboutData(), []);
    // DEFINE A FUNCTION THAT WILL RETURN THE JSX NEEDED ONCE WE GET THE DATA
    const loaded = () => (
        <div className="about">
            <h2>{about.name}</h2>
            <img src="https://i.imgur.com/TlpB6It.jpg?1" alt="ProfilePic" />
            <p>{about.bio}</p>
        </div>
    );

    // IF THE DATA ARRIVES RETURN THE RESULT OF LOADED, IF NOT, AN H1 THAT SAYS LOADING
    return about ? loaded() : <h1>Please wait a moment...</h1>
};