import { Link } from "react-router-dom";
import React from 'react';


function Home() {
  return (
    <div className="home-div container-fluid" id='home'>
        <div className="intro-div">
          <h1>
            New personal website -----> <a href="www.angelbarranco.com"><span className="highlight">www.angelbarranco.com</span></a>
          </h1>

          <p className="job-title">Software Engineer</p>

            <br />
            <br />
            <br />
        </div>

    </div>
  );
}

export default Home;
