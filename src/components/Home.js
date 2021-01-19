import { Link } from "react-router-dom";
import React from 'react';


function Home() {
  return (
    <div className="home-div container-fluid" id='home'>
      <h1>
        Hello, I'm <span className="highlight">Angel Barranco</span>
      </h1>
      <p className="job-title">Software Engineer</p>
    </div>
  );
}

export default Home;
