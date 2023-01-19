import React from 'react';
import chess from "../../Assets/Images/Marchen.jpg";
import "./merchandise.component.css";

function Merchandise() {
    return (
        <div className='containermar'>
            <div className="merchandise_data">
              <center><h3>Shaurya</h3></center>
             <center><h2 id='merch-wrapper'><span id="merch-text">Merchandise</span></h2></center>
             <button type='submit'><a href="https://forms.gle/qmZ8BDyZi4YF4w33A">Buy Now</a></button>
            </div>
            <div className="merchandise_image">
            <img alt="Merchandise" src={chess} className="img21" />
            </div>
        </div>
    )
}

export default Merchandise