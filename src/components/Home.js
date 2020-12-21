import { Link } from "react-router-dom";
import React from 'react';


function Home() {
  return (
    <div className="home-div container-fluid" id='home'>
      <div className='row'>
        <div className="intro-div">
          <h1>
            Hello, I'm <span className="highlight">Angel Barranco</span>
          </h1>

          <p className="job-title">Software Engineer</p>

            <br />
            <br />
            <br />
          {/* <div className='in-progress'>
              Under Construction...
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
