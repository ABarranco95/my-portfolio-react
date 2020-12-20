import { Link } from "react-router-dom";
import React from 'react';


function Portfolio(props) {

  return (
    <div className="container-fluid portfolio-div">
      <h2>Portfolio</h2>
        <div className='row'>
            <div className='.col-md-6'>
                <h3>Ping Pong</h3>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAC4CAMAAAD9ogFoAAAAclBMVEUAAAD///8vLy9QUFATExPx8fG4uLiHh4fg4OBBQUHJyclfX18ICAgEBAT4+Pienp6QkJA0NDQbGxvR0dFwcHBoaGggICA6OjpJSUmsrKympqYXFxeBgYFOTk5ZWVnZ2dmOjo6/v79kZGR5eXkmJibn5+eJjuMZAAADxElEQVR4nO3d4XaiOhQFYCAR0AAKEkJFqQp9/1ec0Kkt93acrrsWJLk5+/vTLrGSXfEEIpAgAAAgImfea59E56H3UkRH9K/oG7MK3ZbC7CqP/636rSbW0RPbjbCDcPSMc57ZbgSsK9nNqNkCHs8WnKy1b0WneS8z362qNrMFrtTgRX2LPpxOpz6gEH0fhpv95EUn3AZfFZ4f9h/SMNzZbuYaDvotzadfSh25DP7Uuel/SmyjaWtD9K/otd7E2fRA9kAm+kOVzvbqvSxzz6N7X+ER/St61zQN1z8zWX84onPzDe3or9Gk/1f0fIw+6Edutpu5hmkfvnj3sQ//iF69FcXnAi/L3LfDl0eZ87/CEz5ojbYzfLYgU7MF5dO/By98Hr7QQ3gwGtEpegxLAoDfON2vGwlXeESniHD0JoqiznYjAGB18nq9Pjtf13OEKzyiU3SO41jYbgTQlekNMG5st8KK96sgInPrm86Zys2t7m9MR3eowiO6MYjuAtPRR6WUIx2K6egOQXSKTEcX5/PZkaEKVHhjEP0HuYkdfdPRk9vtJn96UrYripfVm+Jkhc+OYYjoK3Iyej4cDvfV1+JkdDOMV/iiKNC52ZYdtMrc+hyKbhrh6GXbtqPtRgDA6tgwDFvbjbCDcIVHdIoOu92utt0IAID1vGw2m7PtRthBuHNDdIoUY4zmADAALa2UUv38NB8RrvCITtH+9fUVQxUA4LFTmqaD7UbYQbhzQ3SKWiEE7qcI4L9t3/dEhyUJV3hEp+j09vZGdB8eAGjYH49HoiOyhju3fLojirnV/ZXh6CxNU1cm1DEcXYTPZ+c1jdV1bfCbVpeiG4boFLkUXV0uF4MXe7kUnXCFR3RTXIpu+Mxol6IbhugUIboTpuvcfrwlz3Jcik64c0N0U1yK3pu9ft2l6IYRjj5KKTFznnXTnLVLDlVUs9Ox1GXBF17e0hW+HS7Xtq7FWXYBl6582/BHS0ePWJmwSLH63gVKkIoe/E6bZ7nTsSeLb/DyUrVdIPZ97Xz2hZWsFDIP+lH+Y6JvCrgSY1sFTVs5cjtmg/LpXrtNELzPj5dROvN4bLZye+/vfS1EFfC+lJI5OptQEsfxkvdJjWpWMymugzgn+r3fllEpDgu+/oKWP2jl/5epIJeOnrVqVBXnemOvszLiDn/Yl46u9Ed90IdnXZBvo5bdB3d7d5EkyZLdUNerRkSq1Ft903WVYo7MogRA3ViWpcH7NLvEpUsBuFk3Hf1geJ3PkofeezYYjeg+Q/Rv8sh7uB09AAB47hdjWkJ38ZMLswAAAABJRU5ErkJggg==" alt="ping-pong" />
                <p>Ping pong game created by me using javascript html and css.</p>
            </div>
            <div className='.col-md-6'>
                <h3>Munch</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhDYQ68Q3hjgq9yosg522PQsXIkAuHnMjQg&usqp=CAU" alt="Munch" />
                <p>Built using Express, NodeJs, RESTful APIs and PostgreSQL. My app allows you to search for your eateries near you using your zipcode.</p>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;
