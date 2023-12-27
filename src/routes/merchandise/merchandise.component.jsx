import React from 'react';
import Marquee from "react-fast-marquee";
import chess from "../../Assets/Images/Marchen.jpg";
import mark from "../../Assets/Images/1k.png";
import mark2 from "../../Assets/Images/2k.png";
import mark3 from "../../Assets/Images/3k.png";
import img2 from "../../Assets/Images/naruto3.gif";
import "./merchandise.component.css";
function Merchandise() {
    return (
      <div className='containermar'>
        <div class="character">
        <div className="merchandise_data">
        <center><h3>Shaurya</h3></center>
       <center><h2 id='merch-wrapper'><span id="merch-text">Merchandise</span></h2></center>
       </div>  
        <div class="anime">
          <img src={img2} alt="naruto"></img>
        </div>
      </div>

       <div class="container">
    <input type="radio" name="slider" id="item-1" checked></input>
    <input type="radio" name="slider" id="item-2"></input>
    <input type="radio" name="slider" id="item-3"></input>
    
  <div class="cards">
    <label class="card" for="item-1" id="song-1">
      <img src={chess} alt="song" ></img>
    </label>
    <label class="card" for="item-2" id="song-2" >
      <img src={chess} alt="song"></img>
    </label>
    <label class="card" for="item-3" id="song-3">
      <img src={chess} alt="song"></img>
    </label>
  </div>  
      </div>
      <div><button class = "btn" type='submit'><a href="https://forms.gle/qmZ8BDyZi4YF4w33A">Buy Now</a></button>
      </div>

      <div class="marqueeA">
          <Marquee speed={100} direction='left'>
            <div class="upper">
              <span>BUY NOW!!</span>
            </div>

            <div class="upperq">
              <span>今すぐ購入！！</span>
            </div>

            <div class="upper">
              <span>BUY NOW!!</span>
            </div>

            <div class="upperq">
              <span>今すぐ購入！！</span>
            </div>

            <div class="upper">
              <span>BUY NOW!!</span>
            </div>

            <div class="upperq">
              <span>今すぐ購入！！</span>
            </div> 
          </Marquee>
        </div>

      <div class="marqueeB">
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
    );
}
export default Merchandise