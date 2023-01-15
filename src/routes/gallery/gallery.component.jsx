import React from "react";
import "./style.css";
import basketImg from "../../Assets/Images/basket.jpg";
import chess from "../../Assets/Images/chess.jpg";

function Gallery() {
  return (
    <div>
      <div className="container">
        <div className="section1">
          <div className="heading">
            <p>GALLERY</p> </div>
        </div>
        <div >
         <div className="sideHeading">2021</div>
        </div>
      </div>
      
      <div className="section2">
        <img alt="basketBallImage" src={basketImg} className="img2" />
       
        <img alt="basketBallImage" src={basketImg} className="img2" />
        
        
        <img alt="basketBallImage" src={basketImg} className="img2" />
        <img alt="basketBallImage" src={basketImg} className="img2" />

        <img alt="basketBallImage" src={basketImg} className="img2" />
        <img alt="basketBallImage" src={basketImg} className="img2" />
      </div>
      <div >
      <div className="sideHeading">2020</div>
      </div>

      <div className="section3" id="image">

        <img alt="chess" src={chess} className="img2" />

        <img alt="chess" src={chess} className="img2" />

        <img alt="chess" src={chess} className="img2" />

        <img alt="chess" src={chess} className ="img2"/>

        <img alt="chess" src={chess} className ="img2"/>

        <img alt="chess" src={chess} className ="img2"/>
      </div>
    </div>
  );
}

export default Gallery;
