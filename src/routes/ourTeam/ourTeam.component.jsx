import {useEffect} from "react";
import abhinav from "../../Assets/Images/team/PR/ABHINAV.jpg";
import adarsh from "../../Assets/Images/team/SC/adarsh.jpeg";
import akash from "../../Assets/Images/team/SC/AKASHKUMARSAINY.jpg";
import aniruddha from "../../Assets/Images/team/PR/Aniruddha.jpg";
import ankur from "../../Assets/Images/team/DESIGN/ankur.jpg";
import apurva from "../../Assets/Images/team/PR/APURVAJAISWAL.jpg";
import ashif from "../../Assets/Images/team/SC/AshifRaza.jpeg";
import avi from "../../Assets/Images/team/SPONS/AVIYADAV.jpg";
import ayushi from "../../Assets/Images/team/DOC/AYUSHIPANDEY.jpg";
import harsh from "../../Assets/Images/team/EM/HarshAharwal.jpg";
import mansi from "../../Assets/Images/team/EM/MansiKumari2.jpg";
import om from "../../Assets/Images/team/EM/OmPrakashJaiswal.JPG";
import rupal from "../../Assets/Images/team/EM/RupalVerma.jpg";
import sachchidanand from "../../Assets/Images/team/EM/Sachchidanandyadav.png";
import sai from "../../Assets/Images/team/EM/VSaicharanreddy.jpg";
import darshan from "../../Assets/Images/team/EM/Darshan.jpg";
import diya_da from "../../Assets/Images/team/PR/DiyaDA.jpg";
import kunal_chandrakar from "../../Assets/Images/team/PR/kunalchandrakar.jpg";
import roshan_tiwari from "../../Assets/Images/team/PR/RoshanTiwari.jpg";
import sahil_dahat from "../../Assets/Images/team/PR/SahilDahat.jpg";
import surya_dev_singh from "../../Assets/Images/team/PR/SURYADEVSINGH.jpg";
import harsh_ranjan from "../../Assets/Images/team/DOC/HarshRanjanSinha.jpeg";
import Samyukta from "../../Assets/Images/team/DOC/SamyuktaShaji.jpg";
import Mayank from "../../Assets/Images/team/DESIGN/MayankJaiswal2.png";
import kareena_bhaskar from "../../Assets/Images/team/SPONS/KareenaBhaskar.jpg";
import nawal_agarwal from "../../Assets/Images/team/SPONS/NawalAgarwal.jpeg";
import rashika_sahu from "../../Assets/Images/team/SPONS/RashikaSahu.jpg";
import samkit_jain from "../../Assets/Images/team/SPONS/SamkitJain.jpg";
import shuja_haider_rizvi from "../../Assets/Images/team/SPONS/SHUJAHAIDERRIZVI2.jpg";
import vikas_choudhary from "../../Assets/Images/team/SPONS/VikasChoudhary.jpeg";
import bhukya_ganesh from "../../Assets/Images/team/SC/BhukyaGanesh.jpg";
import deepak_kumar_rathore from "../../Assets/Images/team/SC/DeepakKumarRathore.jpg";
import vinayak_tiwari from "../../Assets/Images/team/SC/VinayakTiwari.jpg";
import khomendra_sahu from "../../Assets/Images/team/SC/KhomendraSahu.jpg";
import kushal_varma from "../../Assets/Images/team/SC/KushalVarma.jpg";
import lipakshi_chandrakar from "../../Assets/Images/team/SC/LipakshiChandrakar.jpeg";
import manas_tiwari from "../../Assets/Images/team/SC/ManasTiwari.jpg";
import mayank_singh from "../../Assets/Images/team/SC/MayankSingh.jpg";
import nachiket_kumar_singh from "../../Assets/Images/team/SC/NachiketKumarSingh.JPG";
import raj_garg from "../../Assets/Images/team/SC/RajGarg2.jpeg";
import rakesh_kumar from "../../Assets/Images/team/SC/RakeshKumar.jpg";
import rashal_thakur from "../../Assets/Images/team/SC/RashalThakur.jpeg";
import sanskar_thengare from "../../Assets/Images/team/SC/SanskarThengare.jpg";
import shivam_gole from "../../Assets/Images/team/SC/ShivamGole.jpeg";
import sourabh_netam from "../../Assets/Images/team/SC/SourabhNetam.jpg";
import tangi_vijayalakshmi from "../../Assets/Images/team/SC/VIJAYALAKSHMITangi.jpg";
import mansi_dubey from "../../Assets/Images/team/WEB/MansiDubey.jpg";
import Utkarsh from "../../Assets/Images/team/OC/UtkarshMittal.jpg";
import Shubham from "../../Assets/Images/team/OC/ShubhamSonkar.jpg";
import LuckyDewangan from "../../Assets/Images/team/WEB/LuckyDewangan.jpg";



import "./ourTeam.component.css";
function OurTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div class="">
      <p class="team-head-text" id="ot-wrapper"><span id="ot-text">Our Team</span></p>
      <p class="overall" id="overall">OVERALL</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${harsh})` }}>
          <div class="content">
            <h2 class="title">Harsh Aharwal</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage : `url(${roshan_tiwari})` }}>
          <div class="content">
            <h2 class="title">Roshan Tiwari</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${Utkarsh}), url(${harsh})` }}>
          <div class="content">
            <h2 class="title">Utkarsh Mittal</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${Shubham})` }}>
          <div class="content">
            <h2 class="title">Shubham Sonkar</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
      </main>

      {/* spons team */}
      

      <p class="overall" id="design">DESIGN</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${ankur})` }}>
          <div class="content">
            <h2 class="title">ANKUR SHRIVASTAVA </h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${Mayank})` }}>
          <div class="content">
            <h2 class="title">Mayank Jaiswal</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
      </main>

      <p class="overall" id="webd">WEB DEVELOPER</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${mansi_dubey})` }}>
          <div class="content">
            <h2 class="title">Mansi Dubey</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${LuckyDewangan})` }}>
          <div class="content">
            <h2 class="title">Lucky Dewangan</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        
      </main>
      <p class="overall" id="pr">SPONS</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${avi})` }}>
          <div class="content">
            <h2 class="title">AVI YADAV</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${kareena_bhaskar})` }}>
          <div class="content">
            <h2 class="title">Kareena Bhaskar</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${nawal_agarwal})` }}>
          <div class="content">
            <h2 class="title">Nawal Agarwal</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${rashika_sahu})` }}>
          <div class="content">
            <h2 class="title">Rashika Sahu</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${samkit_jain})` }}>
          <div class="content">
            <h2 class="title">Samkit Jain</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${shuja_haider_rizvi})` }}>
          <div class="content">
            <h2 class="title">Shuja Haider Rizvi</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${vikas_choudhary})` }}>
          <div class="content">
            <h2 class="title">Vikas Choudhary</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
      </main>
      <p class="overall" >SPORTS COORDINATOR</p>

      <main class="page-content" id="sc">
        <div class="card" style={{ backgroundImage: `url(${adarsh})` }}>
          <div class="content">
            <h2 class="title">ADARSH SINGH</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${akash})` }}>
          <div class="content">
            <h2 class="title">AKASH KUMAR SAINY</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${ashif})` }}>
          <div class="content">
            <h2 class="title">Ashif Raza</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${bhukya_ganesh})` }}>
          <div class="content">
            <h2 class="title">Bhukya Ganesh</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${deepak_kumar_rathore})` }}>
          <div class="content">
            <h2 class="title">Deepak Kumar Rathore</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${vinayak_tiwari})` }}>
          <div class="content">
            <h2 class="title">Vinayak Tiwari</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${khomendra_sahu})` }}>
          <div class="content">
            <h2 class="title">Khomendra Sahu</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${kushal_varma})` }}>
          <div class="content">
            <h2 class="title">Kushal Varma</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${lipakshi_chandrakar})` }}>
          <div class="content">
            <h2 class="title">Lipakshi Chandrakar</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${manas_tiwari})` }}>
          <div class="content">
            <h2 class="title">Manas Tiwari</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${mayank_singh})` }}>
          <div class="content">
            <h2 class="title">Mayank Singh</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${nachiket_kumar_singh})` }}>
          <div class="content">
            <h2 class="title">Nachiket Kumar Singh</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${raj_garg})` }}>
          <div class="content">
            <h2 class="title">Raj Garg</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${rakesh_kumar})` }}>
          <div class="content">
            <h2 class="title">Rakesh Kumar</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${rashal_thakur})` }}>
          <div class="content">
            <h2 class="title">Rashal Thakur</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${sanskar_thengare})` }}>
          <div class="content">
            <h2 class="title">Sanskar Thengare</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${shivam_gole})` }}>
          <div class="content">
            <h2 class="title">Shivam Gole</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${sourabh_netam})` }}>
          <div class="content">
            <h2 class="title">Sourabh Netam</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${tangi_vijayalakshmi})` }}>
          <div class="content">
            <h2 class="title">Tangi Vijayalakshmi</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
      </main>

      {/* displipary team */}
      <p class="overall" id="design">EVENT MANAGEMENT</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${harsh})` }}>
          <div class="content">
            <h2 class="title">Harsh Aharwal</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${mansi})` }}>
          <div class="content">
            <h2 class="title">Mansi</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${om})` }}>
          <div class="content">
            <h2 class="title">Om Parkash Jaiswal</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${rupal})` }}>
          <div class="content">
            <h2 class="title">Rupal Verma</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${sachchidanand})` }}>
          <div class="content">
            <h2 class="title">Sachchidanand Yadav</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${sai})` }}>
          <div class="content">
            <h2 class="title">V Sai Charan Reddy</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${darshan})` }}>
          <div class="content">
            <h2 class="title">Darshan</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
      </main>

      {/* PR team */}
      <p class="overall" id="pr">PR & MARKETING</p>

      <main class="page-content">
        <div class="card" style={{ backgroundImage: `url(${ayushi})` }}>
          <div class="content">
            <h2 class="title">AYUSHI PANDEY</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${harsh_ranjan})` }}>
          <div class="content">
            <h2 class="title">Harsh Ranjan Sinha</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${Samyukta})` }}>
          <div class="content">
            <h2 class="title">SAMYUKTA SHAJI</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        
        
      </main>

      {/*Doc team */}
      <p class="overall" id="spons">DOCUMENTATION</p>
      <main class="page-content">
      <div class="card" style={{ backgroundImage: `url(${abhinav})` }}>
      <div class="content">
        <h2 class="title">ABHINAV JHA</h2>
        <p class="copy">4th year</p>

      </div>
    </div>
        <div class="card" style={{ backgroundImage: `url(${aniruddha})` }}>
          <div class="content">
            <h2 class="title">Aniruddha Tiwari</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${apurva})` }}>
          <div class="content">
            <h2 class="title">APURVA JAISWAL</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${diya_da})` }}>
          <div class="content">
            <h2 class="title">Diya D A</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${kunal_chandrakar})` }}>
          <div class="content">
            <h2 class="title">Kunal Chandrakar</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        
        <div class="card" style={{ backgroundImage: `url(${sahil_dahat})` }}>
          <div class="content">
            <h2 class="title">Sahil Dahat</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${surya_dev_singh})` }}>
          <div class="content">
            <h2 class="title">Surya Dev Singh</h2>
            <p class="copy">4th year</p>
          </div>
        </div>
      </main>


    </div>
  );
}

export default OurTeam;

