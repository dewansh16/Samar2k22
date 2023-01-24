import React from 'react'

import SamarImg from "../../Assets/Images/SAMAR.png";
import LogoImg from "../../Assets/Images/samar_logo.png";
import './landingLoader.component.css'

function LandingLoader({isLoading}) {
    return (
        <div style={isLoading ? {} : { display: 'none' }} className="animationDiv">
            <div className="stripes-box">
                <div className="blackStripe" style={{height:'4%'}}/>
                <div className="redStripe3" style={{height:'1%'}}/>
                <div className="blackStripe" style={{height:'9%'}}/>
                <div className="redStripe2" style={{height:'2%'}}/>
                <div className="blackStripe" style={{height:'8%'}}/>
                <div className="redStripe1" style={{height:'3%'}}/>
                <div className="blackStripe" style={{height:'8%'}}/>
                <div className="yellowStripe2" style={{height:'7%'}}/>
                <div className="blackStripe" style={{height:'7%'}}/>
                <div className="yellowStripe1" style={{height:'15%'}}/>
                <div className="blackStripe" style={{height:'6%'}}/>
                <div className="greyStripe" style={{height:'30%'}}/>
            </div>
            <div style={{position:'absolute',top:'40%'}}>
                <img
                    style={{height:'150px',width:'120px'}}
                    alt="logoImage"
                    src={LogoImg}
                />
            </div>
            <div style={{position:'absolute',top:'80%'}}>
                <h1 style={{fontFamily:'GOTSamar',fontSize:'4rem'}}>SAMAR</h1>
            </div>
        </div>
    )
}

export default LandingLoader
