import React from "react";

function Project(props) {
    console.log(props)
    return(
        <>
        <div className="projectCard" key={props.projects.title}>
            <img src={require(`../assets/images/${props.projects.title}.png`).default}/>
            <div>
                <h1>
                    {props.projects.title}
                </h1>
                <p>
                    <a href={props.projects.github} >
                        github link
                    </a>
                    <br/>
                    <a href={props.projects.deploy}>
                        deployed app
                    </a>
                </p>
                <p>
                    {props.projects.description}
                </p>
            </div>
        </div>
        </>
    )
}

export default Project