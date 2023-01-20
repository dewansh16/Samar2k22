import React from "react";
import chelsy from "../../Assets/Images/team/OC/ChelsyGangwar.jpeg";
import prajjwal from "../../Assets/Images/team/OC/prajjwal.jpg";
import rishabh from "../../Assets/Images/team/OC/Rishabh.jpg";
import binay from "../../Assets/Images/team/OC/binay.jpg";
import aman from "../../Assets/Images/team/SPONS/AmanKhandwe.jpg";
import anupam from "../../Assets/Images/team/SPONS/AnupamVikasBanjare.jpg";
import anushka from "../../Assets/Images/team/DESIGN/AnushkaAhire.jpeg";
import priyansh from "../../Assets/Images/team/DESIGN/PRIYANSH.jpg";
import devesh from "../../Assets/Images/team/SC/DeveshKumar.jpg";
import abhiyash from "../../Assets/Images/team/SC/AbhiyashRajSona.jpg";
import dhara from "../../Assets/Images/team/SC/DharaPainkra.jpg";
import divyansh from "../../Assets/Images/team/SC/DivyanshDiwan.jpg";
import mohit from "../../Assets/Images/team/SC/MohitPrasad.jpg"
import navdeep from "../../Assets/Images/team/SC/NavdeepVaishnaw.jpeg"
import nitin from "../../Assets/Images/team/SC/nitinkumarverma.jpg"
import vijay from "../../Assets/Images/team/SC/VijayKoshale.jpg"
import aakash from "../../Assets/Images/team/PR/AakashAgrawal.jpg"
import ayushi from "../../Assets/Images/team/PR/AyushiYadav.jpg"
import ishika from "../../Assets/Images/team/PR/IshikaJain.jpg"
import jiya from "../../Assets/Images/team/PR/JiyaGoyal.jpg"
import malays from "../../Assets/Images/team/PR/MalayaJhanwar.jpg"
import dewansh from "../../Assets/Images/team/WEB/DewanshPatle.jpeg"
import karishma from "../../Assets/Images/team/WEB/KarishmaDahariya.jpg"

import "./ourTeam.component.css";
function ourTeam() {
  return (
    <div className="">
      <p className="team-head-text" id="ot-wrapper"><span id="ot-text">Our Team</span></p>
      <p className="overall" id="overall">OVERALL</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${prajjwal})` }}>
          <div class="content">
            <h2 class="title">PRAJWAL SHARMA</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${binay})` }}>
          <div class="content">
            <h2 class="title">BINAY KUMAR SETHI</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${rishabh})` }}>
          <div class="content">
            <h2 class="title">RISHABH</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${chelsy})` }}>
          <div class="content">
            <h2 class="title">CHELSY GANGWAR</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
      </main>
      <p className="overall" >SPORTS COORDINATOR</p>

      <main class="page-content" id="sc">
        <div class="card" style={{ backgroundImage: `url(${devesh})` }}>
          <div class="content">
            <h2 class="title">DEVESH KUMAR</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${abhiyash})` }}>
          <div class="content">
            <h2 class="title">ABHIYASH RAJ SONA</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${dhara})` }}>
          <div class="content">
            <h2 class="title">DHARE PAINKRA</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${divyansh})` }}>
          <div class="content">
            <h2 class="title">DIVYANSH DIWAN</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${mohit})` }}>
          <div class="content">
            <h2 class="title">MOHIT PRASAD</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${navdeep})` }}>
          <div class="content">
            <h2 class="title">NAVDEEP VAISHNAW</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${nitin})` }}>
          <div class="content">
            <h2 class="title">NITIN KUMAR VERMA</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${vijay})` }}>
          <div class="content">
            <h2 class="title">VIJAY KOSHALE</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
      </main>

      <p className="overall" id="design">DESIGN</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${anushka})` }}>
          <div class="content">
            <h2 class="title">ANUSHKA AHIRE</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${priyansh})` }}>
          <div class="content">
            <h2 class="title">PRIYANSH</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
      </main>


      <p className="overall" id="pr">PR & Marketing</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${aakash})` }}>
          <div class="content">
            <h2 class="title">AAKASH AGRAWAL</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${ayushi})` }}>
          <div class="content">
            <h2 class="title">AYUSHI YADAV</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${ishika})` }}>
          <div class="content">
            <h2 class="title">ISHIKA JAIN</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${jiya})` }}>
          <div class="content">
            <h2 class="title">JIYA GOYAL</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${malays})` }}>
          <div class="content">
            <h2 class="title">MALAYA JHANWAR</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
      </main>

      <p className="overall" id="spons">SPONSORSHIP</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${aman})` }}>
          <div class="content">
            <h2 class="title">AMAN KHANDWE</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${anupam})` }}>
          <div class="content">
            <h2 class="title">ANUPAM VIKAS BANJARE</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
      </main>

      <p className="overall" id="webd">WEB DEVELOPER</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${dewansh})` }}>
          <div class="content">
            <h2 class="title">DEWANSH PATLE</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${karishma})` }}>
          <div class="content">
            <h2 class="title">KARISHMA DAHARIYA</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
      </main>
    </div>
  );
}

export default ourTeam;

