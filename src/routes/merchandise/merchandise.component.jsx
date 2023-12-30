import {useEffect} from 'react';
import React from 'react';
import Marquee from "react-fast-marquee";
import chess from "../../Assets/Images/merch.jpg";
import mark from "../../Assets/Images/1k.png";
import mark2 from "../../Assets/Images/2k.png";
import mark3 from "../../Assets/Images/3k.png";
import img2 from "../../Assets/Images/naruto3.gif";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./merchandise.component.css";
function Merchandise() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <div className='containermar'>
      <div class="character">
      <div className="merchandise_data text-[] lg:text-[]">
      {/* <center><h3>Shaurya</h3></center> */}
     <center><h2 id='merch-wrapper'><span id="merch-text">Merchandise</span></h2></center>
     </div>  
      <div class="anime">
        <img src={img2} alt="naruto"></img>
      </div>
    </div>

      <div class="view">
     <div class="container">
        <div class="carousel-set">
          <Carousel  infiniteLoop stopOnHover useKeyboardArrows>
              <div>
                  <img src={chess} alt="fdf"  />    
              </div>
              <div>
                  <img src={chess} alt="fdf"  />
              </div>
              <div>
                  <img src={chess} alt="fdf" />
              </div>
          </Carousel>
          </div>
          <div class="doc">
            <div class="in">
          <p>🌟 Introducing the SAMAR Fest Exclusive Merch Collection! 🌟 Elevate your style and commemorate the ultimate celebration with our newly launched SAMAR Fest Merchandise. Immerse yourself in the spirit of SAMAR with a stunning array of apparel and accessories that perfectly capture the essence of this unforgettable event.</p>
              <p>From trendy tees to cozy hoodies, our collection blends comfort with cutting-edge design, ensuring you stand out in style. Adorn yourself with SAMAR Fest pride through our high-quality, limited-edition merchandise crafted for those who appreciate uniqueness.</p> 
              <p>Dress to impress and celebrate SAMAR Fest like never before – shop now and be a part of the excitement! 🎉 #SAMARFestMerch #CelebrateInStyle</p>
              </div>
              <div>
            <button class = "btn" type='submit'><a href="https://forms.gle/qmZ8BDyZi4YF4w33A">Buy Now</a>
            </button></div></div>
      
    </div></div>
    
    <div class="marqueeB ">
        <Marquee speed={50} direction='right' pauseOnHover>
          <div class="marks">
            <img src={mark} alt="anime"></img>
          </div>

          <div class="marks">
            <img src={mark2} alt="anime"></img>
          </div>

          <div class="marks">
            <img src={mark3} alt="anime"></img>
          </div>

          <div class="marks">
            <img src={mark} alt="anime"></img>
          </div>

          <div class="marks">
            <img src={mark2} alt="anime"></img>
          </div>
          
          <div class="marks">
            <img src={mark3} alt="anime"></img>
          </div>

          <div class="marks">
            <img src={mark3} alt="anime"></img>
          </div>
        </Marquee>
       </div>

     </div>  
    )
}
export default Merchandise