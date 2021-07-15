import React, {useState} from "react";
import Project from "./Project"

function Portfolio() {
    const [projects, setProjects] = useState([
        {
            title: "Dateable-date-planner",
            github: "https://github.com/ziffoit/Dateable-date-planner",
            deploy: "https://dateable-project.herokuapp.com/home",
            description: "A helpful app for planning a date"
        },
        {
            title: "concerts-in-covid",
            github: "https://github.com/ziffoit/concerts-in-covid",
            deploy: "https://ziffoit.github.io/concerts-in-covid/",
            description: "Get upcoming concerts in your city",
        }
    ])
    return(
        <>
        {projects.map((project,id) => (
            <Project projects={project} key={id}></Project>
        ))}
        
        </>
    )
}

export default Portfolio