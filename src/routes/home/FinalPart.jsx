import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Merchandise from "../../Assets/Images/merch.jpg";
import Djnight from "../../Assets/Images/gallery-images/DJ Night.webp";
import bikeStunt from "../../Assets/Images/gallery-images/BIKE Stunt.jpeg";

import "./home.component.css";

import { NavbarContext } from "../../contexts/navbar.context";

const FinalPart = () => {
  const { setActiveLink } = useContext(NavbarContext);
  return (
    <>
        <div className="cards-container">
        <div data-aos="fade-down" className="gallery-container">
          <Link
            onClick={() => {
              setActiveLink(4);
            }}
            to="/gallery">
            <div className="heading-container-cards">
              <h2>Gallery</h2>
            </div>
            <div className="image-container">
              <img src={Djnight}></img>
            </div>
          </Link>
        </div>
        <div data-aos="fade-down" className="gallery-container">
          <Link
            onClick={() => {
              setActiveLink(1);
            }}
            to="/event">
            <div className="heading-container-cards">
              <h2>Events</h2>
            </div>
            <div className="image-container">
              <img src={bikeStunt}></img>
            </div>
          </Link>
        </div>
        <div data-aos="fade-down" className="merchandise-conatiner">
          <Link
            onClick={() => {
              setActiveLink(8);
            }}
            to="/merchandise">
            <div className="heading-container-cards">
              <h2>Merchandise</h2>
            </div>
            <div className="image-container">
              <img src={Merchandise}></img>
            </div>
          </Link>
        </div>
      </div>


        {/* Samar Youtube */}
        <div className="embadded-video pb-20 ">
          <div data-aos="fade-down" className="video-2">
            <iframe
              width="560"
              height="315"
              // latest link paste here 
              src="https://www.youtube.com/embed/UBsDzaOYTTo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div data-aos="fade-down" className="video-1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/s7DYDkOeaKg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div data-aos="fade-down" className="video-3">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HLTSKIlLRPE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </div>
    </>
  )
}

export default FinalPart