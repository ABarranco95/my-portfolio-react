import React from "react";

function Portfolio() {
  return (
    <div className="container portfolio-div" id="portfolio">
      <h2 className="section-title" id="portfolio-title">
        Portfolio
      </h2>
      <div className="col-lg-6">
        <div class="card mb-3">
          <img src="https://i.ibb.co/yypcb4k/Screen-Shot-2020-12-23-at-12-24-10-PM.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">General Fit</h3>
            <p class="card-text">
            GeneralFit is a web application that allows users to create accounts and pick a fitness plan.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div class="card mb-3">
          <img src="https://i.ibb.co/zh05XZn/Screen-Shot-2020-12-20-at-2-56-46-PM.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">Pong</h3>
            <p class="card-text">
            My first ever project came during my time at General Assembly
              Immersive Bottcamp. We were tasked with creating a mini game using
              Javascript. I recreated one of my favorite classic games, Ping
              Pong.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div class="card mb-3">
          <img src="https://i.ibb.co/wrLR5Wb/Screen-Shot-2020-12-20-at-3-24-28-PM.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">Munch</h3>
            <p class="card-text">
            I created an application that allows you to search for eateries near you using your zipcode.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div class="card mb-3">
          <img src="https://i.ibb.co/BKMNYRD/Screen-Shot-2020-12-26-at-10-23-09-PM.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">Kali Kutz</h3>
            <p class="card-text">
            A barber shop website built using ReactJS.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Portfolio;
