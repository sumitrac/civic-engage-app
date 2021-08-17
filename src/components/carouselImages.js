import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import carouselImages from './carouselImages.css'

// import capitol2 from './..assets/images/capitol2.jpg'
// import capitol1 from './..assets/images/capitol1.jpg'

const CarouselContainer = () => {
  return (
    <div className="wholeContainer">

        <div className="carousel-item active">
          <div className="container">
              <h1>Civic Engagement in the Digital Age</h1>
              <p>Civic engagement is important to the health of democratic nations.<br/> Well-functioning democracies are the result of active participation of their public. </p>
              <a href="/SignUp" className="btn btn-lg btn-primary">
                Become a Civic Engager Today!
              </a>
          </div>
      </div>
      <div className="container">
        <div class="row">
          <div className="col-sm first-row">
            <h1>About the project</h1>
            <p>This project is created as part of the Capstone project for Ada Developers Academy. Tech stack used for this project: React, Python Library Beautiful Soup, Firebase storage, auth and hosting. 
            </p>
          </div>

          <div className="col-sm second-row">
            <h1>What it does?</h1>
            <p>Creates a platform for organizers and general public to share information about local government activities and events.
                </p>

          </div>

        </div>
      </div>



    </div>

      )
    }

export default CarouselContainer
