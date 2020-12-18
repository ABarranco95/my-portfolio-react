import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home-div'>
            <div>
                <div className="landing-page">
                <h1>Hello, I'm <span className='highlight'>Angel Barranco</span></h1>

                <p className='job-title'>I'm a Software Engineer.</p>
                </div>
                {/* <button><Link to="/contact">Contact</Link></button> */}
            </div>
        </div>
    )
}

export default Home;