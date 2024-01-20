import {useEffect} from "react";
import "./style1.css";
// import sponsor from "../../Assets/Images/sponsors.jpg";
// import dainikBhaskar from "../../Assets/Images/Sponsors/dainikbhaskar.jpg";
// import ibc from "../../Assets/Images/Sponsor@24/ibc.jpg";
// import sparkcar from '../../Assets/Images/Sponsors/sparkcars.jpeg'
// import carshringar from '../../Assets/Images/Sponsors/carShringar.jpeg'
// import upgradraipur from '../../Assets/Images/Sponsors/upgradRaipur.jpeg'
import ibc from "../../Assets/Images/Sponsor@24/ibc.jpg";
import EducationPartner from '../../Assets/Images/Sponsor@24/ABEducation.jpg'
import ConnectingPartner from '../../Assets/Images/Sponsor@24/ConnectingPartner.jpg'
import TitleSponsor from '../../Assets/Images/Sponsor@24/TitleSponsor.jpg'
import PrintPartner from '../../Assets/Images/Sponsor@24/PrintPartner.jpg'
import FoodPartner from '../../Assets/Images/Sponsor@24/FoodPartner.jpg'
import AbroadStudy from '../../Assets/Images/Sponsor@24/AbroadStudy.jpg'
import HindiPrint from '../../Assets/Images/Sponsor@24/HindiPrintMedia.jpg'

function Sponsors() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="spo-wrapper">
      <div class="spo-sidebar">
        <h3 id="sponsor-wrap" className="spo-heading1 mt-10" ><span id="sponsor-text">SPONSORS</span></h3>
        <p  className="spo-text " >
          SAMAR success is unmatched and this
          is due to renowned partners we have who have always provided
          unequivocal support . The mutual work between samar and it's partners
          have always lived up to the expectations of the audience and attracted
          a new audience.
        </p>
      </div>
      <div className="line block">
        <hr className="li block"/>
      </div>
      <div class="spo-main  ">
        <div className="sponsor-first flex">
            <img src= {TitleSponsor} alt="dainikbhaskar " className="spo-img" />
            <h1 className="spo-heading" >TITLE SPONSOR</h1>
        </div>

        <div className="sponsor-first  ">
            <img src={ibc} alt="ibc24" className="spo-img" />
          <h1 className="spo-heading">ELECTRONIC MEDIA PARTNER</h1>
        </div>

        <div className="sponsor-first flex">
            <img src={EducationPartner} alt="dainikbhaskar" className="spo-img" />
          <h1 className="spo-heading">EDUACTION PARTNER</h1>
        </div>

        <div className="sponsor-first flex">
            <img src={ConnectingPartner} alt="ibc24" className="spo-img" />
          <h1 className="spo-heading">CONNECTING PARTNER</h1>
        </div>
        
        <div className="sponsor-first">
            <img src={PrintPartner} alt="dainikbhaskar" className="spo-img" />
          <h1 className="spo-heading">ENGLISH PRINT PARTNER</h1>
        </div>

                
        <div className="sponsor-first">
            <img src={FoodPartner} alt="dainikbhaskar" className="spo-img" />
          <h1 className="spo-heading">FOOD PARTNER</h1>
        </div>

        <div className="sponsor-first">
            <img src={AbroadStudy} alt="dainikbhaskar" className="spo-img" />
          <h1 className="spo-heading">COUNSELLING PARTNER</h1>
        </div> 
       
        <div className="sponsor-first">
            <img src={HindiPrint} alt="dainikbhaskar" className="spo-img" />
          <h1 className="spo-heading">HINDI PRINT PARTNER</h1>
        </div>

      </div>
    </div>
  );
}

export default Sponsors;
