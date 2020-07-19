import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa, faStar, faSpinner, faGlobe, faGlobeAsia, faCog, faAtom, faPencilAlt, faEnvelopeSquare, faMailBulk, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function About () {

    return <div className="about">
        <div className="about-text">
            <h2>Overview <FontAwesomeIcon icon={faCog} spin/></h2>
            This is a personal full-stack development 
            project that aims to provide an eCommerce 
            footwear service for users to purchase and 
            review designer shoes. This project is completely
            fictional and developed to practice and demonstrate
            my skills using these technologies.
        </div>
        <div className="about-text">
            <h2>Technologies and Frameworks</h2>
            <img className="about-tech-img" src="../images/react.png" alt="react"></img>
            <img className="about-tech-img" src="../images/nodejs.png" alt="nodejs"></img>
            <img className="about-tech-img" src="../images/mongodb.png" alt="mongodb"></img>
            <img className="about-tech-img" src="../images/redux.png" alt="redux"></img>
            <img className="about-tech-img" src="../images/javascript.png" alt="javascript"></img>
            <img className="about-tech-img" src="../images/css.png" alt="css"></img>
        </div>
        <div className="about-img">
            <img className="profile" src="../images/mtroy.jpg" alt="hugo"></img>
        </div>
        <div className="about-text">
            <h2>Developed by Hugo Baird</h2>
            <div className = "about-email-text">
                <div className ="about-email">
                    <FontAwesomeIcon icon={faEnvelope}/> hugonzb@gmail.com
                </div>
            </div>
            <div>
                <a href="https://github.com/hugonzb"><img className="about-tech-img" src="../images/github.png" alt="github"></img></a>
                <a href="https://www.linkedin.com/in/hugo-baird/"><img className="about-link-img" src="../images/linkedin.png" alt="linkedin"></img></a>
            </div>
        </div>
    </div>
}
export default About;