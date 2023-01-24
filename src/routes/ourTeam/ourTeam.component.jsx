import React from "react";
import chelsy from "../../Assets/Images/team/OC/ChelsyGangwar.jpeg";
import prajjwal from "../../Assets/Images/team/OC/prajjwal.jpg";
import rishabh from "../../Assets/Images/team/OC/Rishabh.jpg";
import binay from "../../Assets/Images/team/OC/binay.jpg";
import anupam from "../../Assets/Images/team/SPONS/AnupamVikasBanjare.jpg";
import anushka from "../../Assets/Images/team/DESIGN/AnushkaAhire.jpeg";
import priyansh from "../../Assets/Images/team/DESIGN/PRIYANSH.jpg";
import abhiyash from "../../Assets/Images/team/SC/AbhiyashRajSona.jpg";
import dhara from "../../Assets/Images/team/SC/DharaPainkra.jpg";
import divyansh from "../../Assets/Images/team/SC/DivyanshDiwan.jpg";
import mohit from "../../Assets/Images/team/SC/MohitPrasad.jpg"
import navdeep from "../../Assets/Images/team/SC/NavdeepVaishnaw.jpeg"
import nitin from "../../Assets/Images/team/SC/nitinkumarverma.jpg"
import vijay from "../../Assets/Images/team/SC/VijayKoshale.jpg"
import palak from "../../Assets/Images/team/SC/PalakAgrawal.jpg"
import khiles from "../../Assets/Images/team/SC/KhileshBidani.jpg"
import godawari from "../../Assets/Images/team/SC/GodawariDhangavi.jpg"
import harsh from "../../Assets/Images/team/SC/harshjayraj.jpg"
import amank from "../../Assets/Images/team/SC/AmanKhandwe.jpg"
import om from "../../Assets/Images/team/SC/OmAgrawal.jpg"
import salil from "../../Assets/Images/team/SC/SalilSharma.jpg"
import shikharc from "../../Assets/Images/team/SC/ShikharChaudhary.jpg"
import amanc from "../../Assets/Images/team/SC/AmanChurendra.jpg"
import aakash from "../../Assets/Images/team/PR/AakashAgrawal.jpg"
import ayushi from "../../Assets/Images/team/PR/AyushiYadav.jpg"
import ishika from "../../Assets/Images/team/PR/IshikaJain.jpg"
import jiya from "../../Assets/Images/team/PR/JiyaGoyal.jpg"
import sachinek from "../../Assets/Images/team/PR/SachinKannoriya.jpg"
import malays from "../../Assets/Images/team/PR/MalayaJhanwar.jpg"
import shubham from "../../Assets/Images/team/PR/ShubhamTiwari.jpg"
import amit from "../../Assets/Images/team/PR/AmitKumar.jpg"
import dewansh from "../../Assets/Images/team/WEB/DewanshPatle.jpeg"
import karishma from "../../Assets/Images/team/WEB/KarishmaDahariya.jpg"
import abhi from "../../Assets/Images/team/SPONS/AbhiAgrawal.jpg"
import amans from "../../Assets/Images/team/SPONS/AmanSukhdave.jpg"
import palash from "../../Assets/Images/team/SPONS/PalashBanchhor.jpg"
import sachine from "../../Assets/Images/team/SPONS/SachinMalve.jpg"
import rahul from "../../Assets/Images/team/SPONS/RahulKumar.jpg"
import ajay from "../../Assets/Images/team/DOC/AjayKumarSahu.jpg"
import dev from "../../Assets/Images/team/DOC/dev.jpeg"
import prachi from "../../Assets/Images/team/DOC/prachi.jpeg"
import ainmesh from "../../Assets/Images/team/DISP/AnimeshJhadi.jpg"
import ankit from "../../Assets/Images/team/DISP/AnkitJhariya.jpg"
import arun from "../../Assets/Images/team/DISP/ArunDhebana.jpg"
import devesh from "../../Assets/Images/team/DISP/DeveshKumar.jpg"
import pradhav from "../../Assets/Images/team/DISP/PradhavGautam.jpg"


import "./ourTeam.component.css";
function ourTeam() {
  return (
    <div className="">
      <p className="team-head-text" id="ot-wrapper"><span id="ot-text">Our Team</span></p>
      <p className="overall" id="overall">OVERALL</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${prajjwal})` }}>
          <div class="content">
            <h2 class="title">PRAJJWAL SHARMA</h2>
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
            <h2 class="title">RISHABH CHOUHAN</h2>
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

      {/* spons team */}
      <p className="overall" id="pr">SPONS</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${abhi})` }}>
          <div class="content">
            <h2 class="title">ABHI AGRAWAL</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${rahul})` }}>
          <div class="content">
            <h2 class="title">RAHUL KUMAR</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${anupam})` }}>
          <div class="content">
            <h2 class="title">ANUPAM VIKAS BANJARE</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${amans})` }}>
          <div class="content">
            <h2 class="title">AMAN SUKHDAVE</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${palash})` }}>
          <div class="content">
            <h2 class="title">PALASH BANCHHOR</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${sachine})` }}>
          <div class="content">
            <h2 class="title">SACHINE MALVE</h2>
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
            <h2 class="title">PRIYANSHU GUPTA</h2>
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

      <p className="overall" >SPORTS COORDINATOR</p>

      <main class="page-content" id="sc">
        <div class="card" style={{ backgroundImage: `url(${abhiyash})` }}>
          <div class="content">
            <h2 class="title">ABHIYASH RAJ SONA</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${dhara})` }}>
          <div class="content">
            <h2 class="title">DHARA PAINKRA</h2>
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
        <div class="card" style={{ backgroundImage: `url(${amanc})` }}>
          <div class="content">
            <h2 class="title">AMAN CHURENDRA</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${godawari})` }}>
          <div class="content">
            <h2 class="title">GODAWARI DHANGAVI</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${harsh})` }}>
          <div class="content">
            <h2 class="title">HARSH JAYRAJ</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${khiles})` }}>
          <div class="content">
            <h2 class="title">KHILESH BIDANI</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${om})` }}>
          <div class="content">
            <h2 class="title">OM AGRAWAL</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${shikharc})` }}>
          <div class="content">
            <h2 class="title">SHIKHAR CHAUDHARY</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${palak})` }}>
          <div class="content">
            <h2 class="title">PALAK AGRAWAL</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${salil})` }}>
          <div class="content">
            <h2 class="title">SALIL SHARMA</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${amank})` }}>
          <div class="content">
            <h2 class="title">AMAN KHANDWE</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
      </main>

      {/* displipary team */}
      <p className="overall" id="design">DISCIPLINARY</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${ainmesh})` }}>
          <div class="content">
            <h2 class="title">ANIMESH JHADI</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${ankit})` }}>
          <div class="content">
            <h2 class="title">ANKIT JHARIYA</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${arun})` }}>
          <div class="content">
            <h2 class="title">ARUN DHEBANA</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${devesh})` }}>
          <div class="content">
            <h2 class="title">DEVESH KUMAR</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${pradhav})` }}>
          <div class="content">
            <h2 class="title">PRADHAV GAUTAM</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
      </main>
      <p className="overall" id="pr">PR & MARKETING</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${amit})` }}>
          <div class="content">
            <h2 class="title">AMIT KUMAR</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${shubham})` }}>
          <div class="content">
            <h2 class="title">SHUBHAM TIWARI</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
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
        <div class="card" style={{ backgroundImage: `url(${sachinek})` }}>
          <div class="content">
            <h2 class="title">SACHINE KANNORIYA</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
      </main>

      <p className="overall" id="spons">DOCUMENTATION</p>
      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${ajay})` }}>
          <div class="content">
            <h2 class="title">AJAY KUMAR SAHU</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${dev})` }}>
          <div class="content">
            <h2 class="title">DEV KUMAR TIRKEY</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${prachi})` }}>
          <div class="content">
            <h2 class="title">PRACHI SONI</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
      </main>


    </div>
  );
}

export default ourTeam;

