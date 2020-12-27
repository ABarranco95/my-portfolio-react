import { Link } from "react-router-dom";

function Portfolio(props) {
  return (
    <div className="container-fluid portfolio-div" id='portfolio'>
      <h2>Portfolio</h2>
      <div className="col-lg-">
        <div class="card">
          <img
            src="https://i.ibb.co/zh05XZn/Screen-Shot-2020-12-20-at-2-56-46-PM.png"
            class="card-img-top"
            alt="ping-pong"
          />
          <div class="card-body">
            <h3 class="card-title">Ping Pong</h3>
            <p class="card-text">
              My first ever project came during my time at General Assembly
              Immersive Bottcamp. We were tasked with creating a mini game using
              Javascript. I recreated one of my favorite classic games, Ping
              Pong.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">HTML</li>
            <li class="list-group-item">CSS</li>
            <li class="list-group-item">Javascript</li>
          </ul>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><a href='https://abarranco95.github.io/'>Deployed App</a></li>
            <li class="list-group-item"><a href='https://github.com/ABarranco95/Ping-Pong'>Github Code</a></li>
          </ul>
        </div>
      </div>

      <div className="col-lg-">
        <div class="card">
          <img
            src="https://i.ibb.co/wrLR5Wb/Screen-Shot-2020-12-20-at-3-24-28-PM.png"
            class="card-img-top"
            alt="Munch"
          />
          <div class="card-body">
            <h3 class="card-title">Munch</h3>
            <p class="card-text">
              I created an application that allows you to search for eateries near you using your zipcode. I used an API to retrieve the needed information back to the user. User authentication was also added so a user can sign up and log in to a personal account and save favorite locations. In the future I plan to add different search methods as well as a more customizable profile.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Express</li>
            <li class="list-group-item">NodeJs</li>
            <li class="list-group-item">Sequelize</li>
            <li class="list-group-item">PostgreSQL</li>
          </ul>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><a href='https://my-munch-app.herokuapp.com/'>Deployed App</a></li>
            <li class="list-group-item"><a href='https://github.com/ABarranco95/munch-app-project'>Github Code</a></li>
          </ul>
        </div>
      </div>

      <div className="col-lg-">
        <div class="card">
          <img
            src="https://i.ibb.co/BKMNYRD/Screen-Shot-2020-12-26-at-10-23-09-PM.png"
            class="card-img-top"
            alt="KaliKutz"
          />
          <div class="card-body">
            <h3 class="card-title">KaliKutz</h3>
            <p class="card-text">
              A simple website for a local barber shop using React. Users are able to book appointments, see the typs of services and read about KaliKutz.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">React</li>
            <li class="list-group-item">HTML</li>
            <li class="list-group-item">CSS</li>
            <li class="list-group-item">Bootstrap</li>
          </ul>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><a href='https://barber-shop-react.herokuapp.com/'>Deployed App (Project in development still.)</a></li>
            <li class="list-group-item"><a href='https://github.com/ABarranco95/barbers-react-app'>Github Code</a></li>
          </ul>
        </div>
      </div>

      <div className="col-lg-">
        <div class="card">
          <img
            src="https://i.ibb.co/yypcb4k/Screen-Shot-2020-12-23-at-12-24-10-PM.png"
            class="card-img-top"
            alt="GeneralFit"
          />
          <div class="card-body">
            <h3 class="card-title">GeneralFit</h3>
            <p class="card-text">
              GeneralFit is a web application that allows users to create accounts and pick a fitness plan. There are workouts and nutrition results available. A user will have a tailored plan for them upon signup and expected results. 

              My part in this project is working on the client side and occasionally helping debug anything on the backend.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">React</li>
            <li class="list-group-item">Javascript</li>
            <li class="list-group-item">Express</li>
            <li class="list-group-item">NodeJS</li>
            <li class="list-group-item">API</li>
            <li class="list-group-item">MongoDB</li>
            <li class="list-group-item">HTML/CSS</li>
            <li class="list-group-item">Bootstrap</li>
          </ul>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Team Project</li>
            <li class="list-group-item">Project in development still. ETA Jan. 5th</li>
            <li class="list-group-item"><a href='https://github.com/codebypaul/fitness_app_client'>Github Code</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
