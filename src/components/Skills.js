import React from "react";

function Skills() {
  return (
    <div className="container-fluid section-container-skills" id='skills'>
      <h2>Skills</h2>
      <div className="row">
        <ul className="col-md-4">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>Express</li>
        </ul>
        <ul className="col-md-4">
          <li></li>
          <li>Python</li>
          <li>JQuery</li>
          <li>GraphQL</li>
          <li>REST</li>
          <li>PostgreSQL</li>
        </ul>
        <ul className="col-md-4">
          <li>MongoDB</li>
          <li>Git</li>
          <li>OOP</li>
          <li>SASS</li>
          <li>Agile</li>
          <li>SCRUM</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
