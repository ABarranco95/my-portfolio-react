import { Link } from "react-router-dom";

function Portfolio(props) {
  return (
    <div className="container-fluid portfolio-div">
      <h2>Portfolio</h2>
      <div className="col-lg-">
        <div class="card">
          <img
            src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/450_easelJSPong/title.png"
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
          <div class="card-body">
            {/* <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> */}
          </div>
        </div>
      </div>

      <div className="col-lg-">
        <div class="card">
          <img
            src="https://cdn.tutsplus.com/active/uploads/legacy/tuts/450_easelJSPong/title.png"
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
