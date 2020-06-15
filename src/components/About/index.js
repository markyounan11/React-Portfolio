import React from 'react';

import markHeadShot from './../../assets/Images/markHeadShot.jpg';
import './../../assets/Styles/styles.css';


const About = props => (
    <div className="ownBackground">
        <div className="container well">
            <br />
            <div className="row border-top border-bottom border-success">
                <div className="col-auto text-success">
                    <h5 className="text-justify-center align-middle">About Me</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-4 text-light justify-content-end">
                    <img src={markHeadShot} className="shadow-lg p-2 mb-5 img-fluid" max-width="100%" height="auto" />
                </div>
                <div className="col text-light text-left">
                    <p>
                        Thank you for visiting my website! My name is Mark Younan and I am a Software Engineer in the San Francisco Bay Area. My whole life, I've always had a fascination with technology and figuring out new, more efficient ways to complete every day tasks in order to make life easier. In many cases, this is a frustrating process, however, the results yielded are always incredibly rewarding.
                        When I am not at work, I enjoy playing golf, watching basketball, and going to the beach. I'm also into super cars and I love and spending time with my family. Additionally, I am a cantor for the Coptic Orthodox Church. My responsibilities include leading the chorus of deacons during liturgical services and being the director of the Hymnological School in charge of teaching Coptic hymns to multiple deacon classes of various age groups.     
                    </p>
                </div>
            </div>
                </div>
            </div>
);

export default About;