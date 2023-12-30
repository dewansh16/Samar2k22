import {useEffect} from "react";
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
import navdeep from "../../Assets/Images/team/SC/NavdeepVaishnaw_.jpeg"
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
import rudronil from "../../Assets/Images/team/DOC/RudronilDey.jpeg"
import ainmesh from "../../Assets/Images/team/DISP/AnimeshJhadi.jpg"
import ankit from "../../Assets/Images/team/DISP/Ankitjhariya.jpg"
import arun2 from "../../Assets/Images/team/DISP/ArunDhebana2.jpg"
import devesh from "../../Assets/Images/team/DISP/DeveshKumar.jpg"
import pradhav from "../../Assets/Images/team/DISP/Pradhavgautam.jpg"

import bg from "../../Assets/Images/Haikyuu.jpg"
import bgImg from "../../Assets/assets/herobg.png";

import "./ourTeam.component.css";



const Card = ({ name, img, year }) => {
  return (
    <div class="card2">
        <img src={img} />
        <figcaption>
          <h3>{name}</h3>
          <p>{year}</p>
        </figcaption>
      </div>
  );
};

const Overall = ({ data }) => {
  return (
    

    <div>
    
      {data.map((item, index) => (
        <Card key={index} name={item.name} img={item.img} year={item.year} />
      ))}
    </div>
  );
};



const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const overall = [
    { name: 'PRAJJWAL SHARMA', img: prajjwal, year: '4th year' },
    { name: 'BINAY KUMAR SETHI', img: binay, year: '4th year' },
    { name: 'RISHABH CHOUHAN', img: rishabh, year: '4th year'},
    { name: 'CHELSY GANGWAR', img: chelsy, year: '4th year' },
    ];

    const spons = [
      { name: 'ABHI AGRAWAL', img: abhi, year: '4th year' },
      { name: 'RAHUL KUMAR', img: rahul, year: '4th year' },
      { name: 'ANUPAM VIKAS BANJARE', img: anupam, year: '4th year' },
      { name: 'AMAN SUKHDAVE', img: amans, year: '4th year' },
      { name: 'PALASH BANCHHOR', img: palash, year: '4th year' },
      { name: 'SACHINE MALVE', img: sachine, year: '4th year' },
      

      ];

      const design = [
        { name: 'ANUSHKA AHIRE', img: anushka, year: '4th year' },
        { name: 'PRIYANSHU GUPTA', img: priyansh, year: '4th year' },
        

        
  
        ];

      const web = [
        { name: 'DEWANSH PATLE', img: dewansh, year: '4th year' },
        { name: 'KARISHMA DAHARIYA', img: karishma, year: '4th year' },
        

        
  
        ];

        const sc = [
          { name: 'ABHIYASH RAJ SONA', img: abhiyash, year: '4th year' },
          { name: 'DHARA PAINKRA', img: dhara, year: '4th year' },
          { name: 'DIVYANSH DIWAN', img: divyansh, year: '4th year' },
          { name: 'MOHIT PRASAD', img: mohit, year: '4th year' },
          { name: 'NAVDEEP VAISHNAW', img: navdeep, year: '4th year' },
          { name: 'NITIN KUMAR VERMA', img: nitin, year: '4th year' },
          { name: 'VIJAY KOSHALE', img: vijay, year: '4th year' },
          { name: 'AMAN CHURENDRA', img: amanc, year: '4th year' },
          { name: 'GODAWARI DHANGAVI', img: godawari, year: '4th year' },
          { name: 'HARSH JAYRAJ', img: harsh, year: '4th year' },
          { name: 'KHILESH BIDANI', img: khiles, year: '4th year' },
          { name: 'OM AGRAWAL', img: om, year: '4th year' },
          { name: 'SHIKHAR CHAUDHARY', img: shikharc, year: '4th year' },
          { name: 'PALAK AGRAWAL', img: palak, year: '4th year' },
          { name: 'SALIL SHARMA', img: salil, year: '4th year' },
          { name: 'AMAN KHANDWE', img: amank, year: '4th year' }
          
          
  
          
    
          ];

        const desciplinary = [
          { name: 'ANIMESH JHADI', img: ainmesh, year: '4th year' },
          { name: 'ANKIT JHARIYA', img: ankit, year: '4th year' },
          { name: 'ARUN DHEBANA', img: arun2, year: '4th year' },
          { name: 'DEVESH KUMAR', img: devesh, year: '4th year' },
          { name: 'PRADHAV GAUTAM', img: pradhav, year: '4th year' },
          ];


  return (
    <div>
      <div className="ourTeam w-full h-auto bg-fixed bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
      <p className="team-head-text " id="ot-wrapper"><span id="ot-text">Our Team</span></p>
      <p className="overall " id="overall">OVERALL</p>
      <Overall data={overall} />

      <p className="overall" id="overall">SPONS</p>

      <Overall data={spons} />

      <p className="overall" id="design">DESIGN</p>
      <Overall data={design} />

      <p className="overall" id="webd">WEB DEVELOPER</p>
      <Overall data={web} />

      <p className="overall" >SPORTS COORDINATOR</p>
      <Overall data={sc} />

      <p className="overall" id="design">DISCIPLINARY</p>
      <Overall data={desciplinary} />
      </div>
    </div>
  );
};

export default OurTeam;

//       
//      
//       <p className="overall" id="pr">PR & MARKETING</p>

//       <main class="page-content">
//         <div class="card" style={{ backgroundImage: `url(${amit})` }}>
//           <div class="content">
//             <h2 class="title">AMIT KUMAR</h2>
//             <p class="copy">4th year</p>
//           </div>
//         </div>
//         <div class="card" style={{ backgroundImage: `url(${shubham})` }}>
//           <div class="content">
//             <h2 class="title">SHUBHAM TIWARI</h2>
//             <p class="copy">4th year</p>
//           </div>
//         </div>
//         <div class="card" style={{ backgroundImage: `url(${aakash})` }}>
//           <div class="content">
//             <h2 class="title">AAKASH AGRAWAL</h2>
//             <p class="copy">4th year</p>
//           </div>
//         </div>
//         <div class="card" style={{ backgroundImage: `url(${ayushi})` }}>
//           <div class="content">
//             <h2 class="title">AYUSHI YADAV</h2>
//             <p class="copy">4th year</p>

//           </div>
//         </div>
//         <div class="card" style={{ backgroundImage: `url(${ishika})` }}>
//           <div class="content">
//             <h2 class="title">ISHIKA JAIN</h2>
//             <p class="copy">4th year</p>
//           </div>
//         </div>
//         <div class="card" style={{ backgroundImage: `url(${jiya})` }}>
//           <div class="content">
//             <h2 class="title">JIYA GOYAL</h2>
//             <p class="copy">4th year</p>
//           </div>
//         </div>
//         <div class="card" style={{ backgroundImage: `url(${malays})` }}>
//           <div class="content">
//             <h2 class="title">MALAYA JHANWAR</h2>
//             <p class="copy">4th year</p>

//           </div>
//         </div>
//         <div class="card" style={{ backgroundImage: `url(${sachinek})` }}>
//           <div class="content">
//             <h2 class="title">SACHINE KANNORIYA</h2>
//             <p class="copy">4th year</p>
//           </div>
//         </div>
//       </main>

//       <p className="overall" id="spons">DOCUMENTATION</p>
//       <main class="page-content">
//       <div class="card" style={{ backgroundImage: `url(${rudronil})` }}>
//       <div class="content">
//         <h2 class="title">RUDRONIL DEY</h2>
//         <p class="copy">4th year</p>

//       </div>
//     </div>
//         <div class="card" style={{ backgroundImage: `url(${ajay})` }}>
//           <div class="content">
//             <h2 class="title">AJAY KUMAR SAHU</h2>
//             <p class="copy">4th year</p>

//           </div>
//         </div>
//         <div class="card" style={{ backgroundImage: `url(${dev})` }}>
//           <div class="content">
//             <h2 class="title">DEV KUMAR TIRKEY</h2>
//             <p class="copy">4th year</p>
//           </div>
//         </div>
//         <div class="card" style={{ backgroundImage: `url(${prachi})` }}>
//           <div class="content">
//             <h2 class="title">PRACHI SONI</h2>
//             <p class="copy">4th year</p>
//           </div>
//         </div>
//       </main>


//     </div>
//   );
// }

// export default ourTeam;

