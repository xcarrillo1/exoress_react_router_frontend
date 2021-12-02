import {useState, useEffect} from "react";

export default function Projects(props) {
    // CREATE STATE TO HOLD PROJECTS
    const [projects, setProjects] = useState(null);

    // CREATE FUNCTION TO MAKE AN API CALL
    const getProjectsData = async () => {
        // MAKE API CALL AND GET RESPONSE
        const response = await fetch(props.URL + "projects");
        // TURN RESPONSE INTO JAVSCRIPT TO OBJECT
        const data = await response.json();
        // SET THE PROJECTS STATE TO THE DATA
        setProjects(data);
    };

    // MAKE AN INITIAL CALL FOR THE DATA INSIDE A useEFFECT, SO IT ONLY HAPPENS ONCE ON COMPONENT LOAD
    useEffect(() => getProjectsData(), []);

    // DEFINE A FUNCTION THAT WILL RETURN THE JSX NEEDED ONCE WE GET THE DATA
    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} alt={project.image} />
                <div className="project">
                <a href={project.git} target="_blank" rel="noreferrer">
                    <br/>
                    <button>GitHub</button>
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                    <button>Live Site</button>
                </a>
                </div>
            </div>
        ));
    };
    return projects ? loaded(): <h1>Please wait a moment...</h1>
};