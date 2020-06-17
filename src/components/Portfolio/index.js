import React from 'react';

//images imported from assets
import Golf from './../../assets/Images/golf.jpg';
import Beach from './../../assets/Images/beach.jpg';
import Cantor from './../../assets/Images/cantor.jpg';


const Portfolio = (props) => (
    <div className="ownBackground">
        <div className="container well">
            <br />
            <div>
                <div className="row border-top border-bottom border-success">
                    <div className="col-auto text-success">
                        <h5 className="text-justify-center align-middle">Portfolio</h5>
                    </div>
                </div>
            </div>
            <br />

            <div className="container well" id="customTextOnCard">
                <div className="row">
                    <div className="col-6 flexbox d-none d-md-block">

                        <div className="card text-white bg-success mb-3">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={Golf} alt="Golf" />
                            <div className="card-header">Golf</div>
                        </div>

                        <div className="card text-white bg-success mb-3">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={Beach} alt="Beach" />
                            <div className="card-header">Beach</div>
                        </div>

                        <div className="card text-white bg-success mb-3">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={Cantor} alt="Cantor" />
                           <div className="card-header">Cantor</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Portfolio;