function Projects(props) {
    return (
        <div class="projects-container">
            <h1>{props.project.name}</h1>
            <img src={props.project.image} />
            <p>{props.project.description}</p>

        </div>
    )
}

export default Projects;