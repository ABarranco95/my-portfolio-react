import { Link } from 'react-router-dom'

function Portfolio(props) {
    const projects = props.projectsList.map((project) => {
        return <li><Link to={`/portfolio/${project.id}`}>{project.name}</Link></li>
        
    })

    return (
        <div className='portfolio-div'>
            <h1>Portfolio</h1>
            <ul>
                {projects}
            </ul>
        </div>
    )
}

export default Portfolio;