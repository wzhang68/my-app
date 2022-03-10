import React from "react";
import "../views/Home.css";
import ME from "../assets/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faSafari,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 align-self-center">
          <img id="myphoto" alt="myImage" src={ME} />
        </div>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 align-self-center self-intro">
          <h2>
            <strong>Wei Zhang</strong>
          </h2>
          <br />
          <h4>MS Student, Computer Science</h4> <br />
          <h5>University of Southern California</h5>
          <h5>Viterbi School of Engineering, Department of Computer Science</h5>
          <br />
          <h5>Email: wzhang68@usc.edu </h5>
          <br /> <br /> <br />
          <div className="row btn-toolbar">
            <div className="btn-group">
              <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1 ">
                <a
                  href="https://www.linkedin.com/in/wei-zhang-177439162"
                  className="brand"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1  ">
                <a href="https://github.com/wzhang68" className="brand">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1  ">
                <a href="https://wzhang68.github.io/" className="brand">
                  <FontAwesomeIcon icon={faSafari} size="2x" />
                </a>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-1  ">
                <a href="https://twitter.com/zzwww995" className="brand">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 align-self-start ">
        <p className="description">
          Welcome to my website. Here is a brief self-introduction. Hi, this is
          Wei Zhang. I'm currently a MS student in Computer Science at the
          University of Southern California. I'm a software engineer who has
          experience in front-end, back-end and game development. My previous
          experience includes various topics in computer science field. I love
          computer science and software that creates value. Feel free to email
          me or join connection to my LinkedIn if you'd like to get in touch
          with me about a project, collaboration, or just to say hello.
        </p>
      </div>
    </div>
  );
};

export default Home;
