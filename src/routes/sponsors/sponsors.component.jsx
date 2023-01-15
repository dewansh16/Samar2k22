import React from "react";
import "./style1.css";
import sponsor from "../../Assets/Images/sponsors.jpg";


function Sponsors() {
  return (
    <div className = "sponsors-page">
      
      <div className="container">
          <div className="heading-container" style={{marginBottom:'3%'}}>
              <div className="heading">
                  <h3>SPONSORS</h3>
              </div>
          </div>
      </div>

      <div className="sponsimage">
      <img 
                alt="chess"
                src={sponsor}
                className = "img1"
            /> 

     <img
                alt="chess"
                src={sponsor}
                className = "img1"
            />   
     <img
                alt="chess"
                src={sponsor}
                className = "img1"
            />   

      <img
                alt="chess"
                src={sponsor}
                className = "img1"
            />         
      

      <img
                alt="chess"
                src={sponsor}
                className = "img1"
            /> 

     <img
                alt="chess"
                src={sponsor}
                className = "img1"
            />   
     <img
                alt="chess"
                src={sponsor}
                className = "img1"
            />   

      
   

      <img
                alt="chess"
                src={sponsor}
                className = "img1"
            />   
            
            </div>
    </div>
  );
}

export default Sponsors;
