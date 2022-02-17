import React from "react";
import "../views/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faSwift,
  faUnity,
  faReact,
  faVuejs,
  faGithub,
  faNodeJs,
  faAngular,
  faBootstrap,
  faPython,
  faMicrosoft,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { faFlask,faE } from "@fortawesome/free-solid-svg-icons";
import ME from "../assets/me.jpg";
import PW from "../assets/pw.jpg";
import GM from "../assets/Game1.jpeg";
import APP1 from "../assets/APP1.png";
import APP2 from "../assets/APP2.jpeg";
import APP3 from "../assets/APP3.jpeg";

const Projects = () => {
  return (
    <div className="about mt-3">
      <div className="container">
        {/* <!-- Current Project --> */}
        <div className="card mb-4">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">
                  <strong>Personal Webpage</strong>
                </h3>
                <br />
                <p className="card-text">
                  Building a personal web page by using Vue.
                </p>
                <div className="row justify-content-md-center mt-4">
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    <FontAwesomeIcon icon={faVuejs} size="2x" />
                    <p className="text-xs">Vue</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    <FontAwesomeIcon icon={faReact} size="2x" />
                    <p className="text-xs">React</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <p className="text-xs">GitHub Page</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 align-self-center">
              {/* <img src="@/assets/main3.jpg" alt="Image" style="width: 95%" /> */}
              <img src={PW} alt="Image" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Current Project --> */}
      <div className="container">
        {/* <!-- First Project --> */}
        <div className="card mb-4">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">
                  <strong>Absorption Knight</strong>
                </h3>
                <br />
                <p className="card-text">
                  Absorption Knight is a single-player, 2D pixel
                  action-adventure side-scrolling mobile game with a little
                  rouge-like element. You play as the young explorer Teodoro who
                  encounters tsunami during his adventure. To find the way home,
                  our protagonist will fight against monsters and build close
                  relationships with villagers on the mysterious island. Along
                  the journey, Teodoro gradually finds the secrets behind the
                  incredible magical power. The main story is narrated by
                  dialogues after boss battles and between Teodoro and
                  villagers. Players need to collect energy balls which are
                  dropped from dead monsters as the fuel in order to launch the
                  magical crystal. When players launch the magical crystal,
                  Teodoro will be sent back to the original world.
                </p>
                <div className="row justify-content-md-center mt-4">
                  {/* <!-- Icons --> */}
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    <FontAwesomeIcon icon={faUnity} size="2x" />
                    <p className="text-xs">Unity</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    <FontAwesomeIcon icon={faApple} size="2x" />
                    <p className="text-xs">IOS</p>
                  </div>
                </div>
                <div className="row justify-content-md-center">
                  {/* <!-- Button --> */}
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <a
                      className="btn btn-outline-dark"
                      target="_blank"
                      href="https://github.com/wzhang68/Absorption-Knight"
                    >
                      Source Code
                    </a>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <a
                      className="btn btn-outline-dark"
                      target="_blank"
                      href="https://docs.google.com/document/d/1DQLGOL8yS4D3yFe24zotkJTiEzg1AlEOmyXNIn4dpcU/edit?usp=sharing"
                    >
                      GDD
                    </a>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <a
                      className="btn btn-outline-dark"
                      target="_blank"
                      href="https://www.youtube.com/watch?v=8UGlXDW61eo"
                    >
                      Demo
                    </a>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <a
                      className="btn btn-outline-dark"
                      target="_blank"
                      href="https://csci526gameweb.wixsite.com/absorptionknight"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 align-self-center">
              {/* <img src="@/assets/main2.jpg" alt="Image" style="width: 95%" /> */}
              <img src={GM} alt="Image" style={{ width: "95%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- First Project --> */}
      <div className="container">
        {/* <!-- Second Project --> */}
        <div className="card mb-4">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">
                  <strong>Movie Search -- IOS</strong>
                </h3>
                <br />
                <p className="card-text">
                  This mobile app is an extended version of Movie-Search-Web in
                  my repository. This app is a native SwiftUI application, which
                  allows users to view some of the trending Movies and TV shows,
                  search for movies and TV shows of their choice and view their
                  details. There’s also a watchlist where users can save, remove
                  and track the TV shows and movies they’d like to watch later.
                  The App contains 3 screens: Home, Details and Search and
                  Watchlist. My backend is written in Node.js, and it is host on
                  Google Cloud Platform (GCP).
                </p>
                <div className="row justify-content-md-center mt-4">
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    <FontAwesomeIcon icon={faApple} size="2x" />
                    <p className="text-xs">IOS</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    <FontAwesomeIcon icon={faSwift} size="2x" />
                    <p className="text-xs">Swift</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    <FontAwesomeIcon icon={faNodeJs} size="2x" />
                    <p className="text-xs">Node.js</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    {/* <i className="devicon-express-original colored"></i> */}
                    <FontAwesomeIcon icon={faE} size="2x" />
                    <p className="text-xs">Express</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    {/* <i className="devicon-googlecloud-plain"></i> */}
                    <FontAwesomeIcon icon={faGoogle} size="2x" />
                    <p className="text-xs">GCP</p>
                  </div>
                </div>
                <div className="row justify-content-md-center">
                  {/* <!-- Button --> */}
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <a
                      className="btn btn-outline-dark"
                      target="_blank"
                      href="https://github.com/wzhang68/Movie-Search-App-IOS"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 align-self-center">
              {/* <img src="@/assets/main4.png" alt="Image" style="width: 35%" /> */}
              <img src={APP1} alt="Image" style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Second Project --> */}
      <div className="container">
        {/* <!-- Third Project --> */}
        <div className="card mb-4">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">
                  <strong>Movie Search -- Angular</strong>
                </h3>
                <br />
                <p className="card-text">
                  This is a responsive webpage that allows you to search for
                  information regarding movies and TV shows using the TMDB API
                  and upon selection can display results on the details page of
                  that specific movie or TV show. Users can view popular,
                  top-rated and trending movies and TV shows on the home page
                  along with currently playing movies. The user will first open
                  Home page, where the navbar contains Search Bar and user can
                  enter the movie or TV show name and select from a list of
                  matching movie/TV show names along with images using
                  “autocomplete”. Selecting the movie or TV show name will lead
                  to the details page of that movie or TV show.
                </p>
                <div className="row justify-content-md-center">
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    <FontAwesomeIcon icon={faAngular} size="2x" />
                    <p className="text-xs">Angular</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    <FontAwesomeIcon icon={faNodeJs} size="2x" />
                    <p className="text-xs">Node.js</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    {/* <i className="devicon-express-original colored"></i> */}
                    <FontAwesomeIcon icon={faE} size="2x" />
                    <p className="text-xs">Express</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    <FontAwesomeIcon icon={faBootstrap} size="2x" />
                    <p className="text-xs">Bootstrap</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    {/* <i className="devicon-googlecloud-plain"></i> */}
                    <FontAwesomeIcon icon={faGoogle} size="2x" />
                    <p className="text-xs">GCP</p>
                  </div>
                </div>
                <div className="row justify-content-md-center">
                  {/* <!-- Button --> */}
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <a
                      className="btn btn-outline-dark"
                      target="_blank"
                      href="https://github.com/wzhang68/Movie-Search-Web"
                    >
                      Source Code
                    </a>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <a
                      className="btn btn-outline-dark"
                      target="_blank"
                      href="https://movie-web-angular.wl.r.appspot.com/"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 align-self-center">
              {/* <img src="@/assets/main.jpg" alt="Image" style="width: 95%" /> */}
              <img src={APP2} alt="Image" style={{ width: "95%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Third Project --> */}

      <div className="container">
        {/* <!-- Fourth Project --> */}
        <div className="card mb-4">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">
                  <strong>Movie Search -- Flask</strong>
                </h3>
                <br />
                <p className="card-text">
                  This is a movie search webpage that allows you to search for
                  information regarding movies and TV shows using the TMDB API,
                  and the results will be displayed on cards below the search
                  query. Upon clicking a button in the card, a modal will pop up
                  and display more information about that selected movie/TV
                  show.
                </p>
                <div className="row justify-content-md-center">
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    <FontAwesomeIcon icon={faPython} size="2x" />
                    <p className="text-xs">Python</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    {/* <i className="devicon-flask-original colored"></i> */}
                    <FontAwesomeIcon icon={faFlask} size="2x" />
                    <p className="text-xs">Flask</p>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                    {/* <i className="fab fa-microsoft fa-2x"></i> */}
                    <FontAwesomeIcon icon={faMicrosoft} size="2x" />
                    <p className="text-xs">Azure</p>
                  </div>
                </div>
                <div className="row justify-content-md-center">
                  {/* <!-- Button --> */}
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <a
                      className="btn btn-outline-dark"
                      target="_blank"
                      href="https://github.com/wzhang68/Movie-Search-Web-Flask"
                    >
                      Source Code
                    </a>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <a
                      className="btn btn-outline-dark"
                      target="_blank"
                      href="https://zww-flask-app.azurewebsites.net/"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 align-self-center">
              {/* <img src="@/assets/main5.jpg" alt="Image" style="width: 95%" /> */}
              <img src={APP3} alt="Image" style={{ width: "95%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Fourth Project --> */}
    </div>
  );
};

export default Projects;
