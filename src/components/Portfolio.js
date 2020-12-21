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
          <div class="card-body">
            {/* <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
