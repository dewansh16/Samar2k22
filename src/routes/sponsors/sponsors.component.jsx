import React from "react";
import "./style1.css";
import sponsor from "../../Assets/Images/sponsors.jpg";
import dainikBhaskar from "../../Assets/Images/dainikbhaskar.jpg";
import ibc from "../../Assets/Images/ibc.jpg";
function Sponsors() {
  return (
    <div class="spo-wrapper">
      <div class="spo-sidebar">
        <h1 className="spo-heading1">SPONSORS</h1>
        <p  className="spo-text" >
          SAMAR success is unmatched and this
          is due to renowned partners we have who have always provided
          unequivocal support . The mutual work between samar and it's partners
          have always lived up to the expectations of the audience and attracted
          a new audience.
        </p>
      </div>
      <div class="spo-main">
        <div className="sponsor-first">
          <h1 className="spo-heading" >PRINT MEDIA PARTENER</h1>
            <img src={dainikBhaskar} alt="dainikbhaskar" className="spo-img" />
        </div>

        <div className="sponsor-first">
          <h1 className="spo-heading">TELEVISION MEDIA PARTENER</h1>
            <img src={ibc} alt="ibc24" className="spo-img" />
        </div>

        <div className="sponsor-first">
          <h1 className="spo-heading">PRINT MEDIA PARTENER</h1>
            <img src={dainikBhaskar} alt="dainikbhaskar" className="spo-img" />
        </div>

        <div className="sponsor-first">
          <h1 className="spo-heading">TELEVISION MEDIA PARTENER</h1>
            <img src={ibc} alt="ibc24" className="spo-img" />
        </div>
        
        <div className="sponsor-first">
          <h1 className="spo-heading">PRINT MEDIA PARTENER</h1>
            <img src={dainikBhaskar} alt="dainikbhaskar" className="spo-img" />
        </div>

        <div className="sponsor-first">
          <h1 className="spo-heading">TELEVISION MEDIA PARTENER</h1>
            <img src={ibc} alt="ibc24" className="spo-img" />
        </div>

      </div>
    </div>
  );
}

export default Sponsors;
