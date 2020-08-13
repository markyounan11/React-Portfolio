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
                        Thank you for visiting my website! My name is Mark Younan and I am a Full Stack Software Engineer in the San Francisco Bay area. My whole life, I've always had a fascination with technology and figuring out new, more efficient ways to complete every day tasks in order to make life easier. I am a self-motivated problem solver and challenge seeker who thrives best when working in a team. I merge a passion for usability and user experience with technical knowledge to create seamless digital experiences. I’m eager to always be learning new technologies and frameworks. When I am not at work, I enjoy playing golf, watching basketball, going to the beach and being out in nature. I'm also into super cars and I love and spending time with my family.

                    </p>
                    <p>
                        Front End: JavaScript, jQuery, JSX, HTML, CSS, Bootstrap, Bulma, Semantic UI, Semantic UI React, APIs, JSON, AJAX, Axios, React.js, Redux.js
                    </p>
                    <p>
                        Back End: Node.js, Express.js, MVC, ORM (Sequelize), Creating APIs, User Authentication, MySQL, MongoDB
                    </p>
                    <p>
                        Dev Tools: Git, Github, Gitlab, NPM, React Developer Tools, Redux DevTools, Heroku, Webpack
                    </p>
                    <p>
                        CS Fundamentals: Algorithms, Data Structures
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default About;