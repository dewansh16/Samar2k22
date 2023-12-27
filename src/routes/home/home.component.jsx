import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import animeBasketballImage from "../../Assets/Images/anime-basketball-image.jpg";
import firstImg from "../../Assets/Images/first-image.png";
import dateImg from "../../Assets/Images/date2-removebg-preview.png";
import samarPoster from "../../Assets/Images/BG-fotor-2023122115516.png";
import bikeStunt from "../../Assets/Images/gallery-images/BIKE Stunt.jpeg";
import pikachu from "../../Assets/Images/pikachu.jpg";
import luffy from "../../Assets/assets/herobg.png";
// import luffy from "../../Assets/Images/luffy.jpg";
import Merchandise from "../../Assets/Images/merch.jpg";
import Djnight from "../../Assets/Images/gallery-images/DJ Night.webp";

import team1 from "../../Assets/Images/playing-teams/team1.jpg";
import team2 from "../../Assets/Images/playing-teams/team2.jpg";
import team3 from "../../Assets/Images/playing-teams/team3.jpg";
import team4 from "../../Assets/Images/playing-teams/team4.jpg";
import team5 from "../../Assets/Images/playing-teams/team5.jpg";
import team6 from "../../Assets/Images/playing-teams/team6.jpg";
import team7 from "../../Assets/Images/playing-teams/team7.jpg";
import team8 from "../../Assets/Images/playing-teams/team8.jpg";
import team9 from "../../Assets/Images/playing-teams/team9.jpg";

import { motion } from "framer-motion";

import { styles } from "../../styles";
import { ComputersCanvas } from "./canvas";



import "./home.component.css";

import { NavbarContext } from "../../contexts/navbar.context";

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home() {
  const { setActiveLink } = useContext(NavbarContext);
  let date = new Date();

  const [seconds, setSeconds] = useState(date.getSeconds());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [hours, setHours] = useState(date.getHours());
  const [days, setDays] = useState(date.getDate());
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";

  // setInterval(() => {
  //   const countDownDate = new Date("January, 18, 2024").getTime();

  //   const currTime = new Date().getTime();
  //   var timeleft = countDownDate - currTime;
  //   var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  //   var hours = Math.floor(
  //     (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  //   setSeconds(seconds);
  //   setMinutes(minutes);
  //   setHours(hours);
  //   setDate(days);
  // }, 1000);


  // timer function 

  const getTime = () =>{
    const timeleft = Date.parse("January, 18, 2024") - Date.now()
    setDays( Math.floor(timeleft / (1000 * 60 * 60 * 24)))
    setHours( Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setMinutes( Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)))
    setSeconds( Math.floor((timeleft % (1000 * 60)) / 1000))
  }

  useEffect(()=>{
    const interval = setInterval(()=> getTime("January, 18, 2024"),1000)
    return () => clearInterval(interval)
  },[])


  const [scrollbar, setScrollbar] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progressHeight = (window.pageYOffset / totalHeight) * 100;
      setScrollbar(progressHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollbarStyleRight = {
    width: '10px',
    height: `${scrollbar}%`,
    position: 'fixed',
    top: 0,
    right: 0,
    background: 'linear-gradient(to top, #ec9921, #dc5a42)',
    zIndex: 9999,
  };
  const scrollbarStyleLeft = {
    width: '10px',
    height: `${scrollbar}%`,
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'linear-gradient(to top, #ec9921, #dc5a42)',
    zIndex: 9999,
  };

  // smoke animation 

  // const root = document.querySelector(".container");
  // let x=0;
  // let y=0;

  // window.addEventListener("mousemove",(e) =>{
  //   x=e.clientX;
  //   y=e.clientY;
  // })

  // let draw = () => {
  //   const smoke = document.createElement("div");
  //   smoke.classList.add("smoke");
  //   smoke.style.left = x + "px";
  //   smoke.style.top = y + "px";

  //   root.appendChild(smoke);
    
  //   smoke.animate(
  //     [
  //       {
  //         backgroundColor: "magenta",
  //         filter: "blur(10px)",
  //       },
  //       {
  //         backgroundColor: "yellow",
  //         filter: "blur(20px)",
  //         top: y- (Math.random() * 400) + "px",
  //         opacity: 0,
  //         scale: 3,
  //       }
  //     ],
  //     {
  //       duration: 500
  //     }
  //   );

  //   setTimeout(() => {
  //     smoke.remove()
  //   }, 500);
  //   requestAnimationFrame(draw);
  // }
  // requestAnimationFrame(draw);
  
  return (
    <>
    {/* <div className="fireAnimation"> */}
     {/* <div id="progressBar" style={scrollbarStyleRight}></div> */}
     {/* <div id="progressBar" style={scrollbarStyleLeft}></div> */}




     <div class="w-full h-auto bg-fixed bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${luffy})` }}>
      <div class="block lg:block">
        
     {/* <div className="glow-animation-out">
          <span>26</span>
     </div> */}


      <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[40px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Adrian</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div> */}

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Team <span className='text-[#915EFF]'>SHAURYA</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            &nbsp; Brings You ... 
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
          <span className='text-[#915EFF]'>SAMAR</span>
          <p className={`${styles.heroSubText} text-white-100`}>
            &nbsp; The sports fest 
          </p>
          {/* <br /> <br /> */}
          <p className={`${styles.heroSubText} mt-6 text-white-100`}>
            &nbsp; <span className='text-[#915EFF]'>Get Ready </span>to enter <br />
            &nbsp; the world of <span className='text-[#915EFF]'>ANIME</span>
          </p>
          </h1>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-[150px] bottom-[150px] w-full flex justify-center items-center'>
      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'> */}
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>


      <div className="home-container">


        {/* date 
        <br />
        <div data-aos="fade-down" data-aos-duration="2000" className="date-img">
              <div
                style={{ backgroundImage: `url(${dateImg})` }}
                className="date-img-bg heading-samar2k23-image"
              />  
          <div data-aos="fade-down" className="heading-samar2k23">
             <div className="text-container">
             <p>SAMAR 2K23</p>
             <h3><span><p className="gradientText">SAMAR 2K23</p></span></h3>
             </div>
            </div>
        </div> 
        <br />

        first image 
         <div  data-aos="flip-up" data-aos-duration="2000" className="page-first-image heading-first-image">
         <div
            style={{ backgroundImage: `url(${samarPoster})` }}
            className="page-first-image-bg"
          >1</div>
         <div
            style={{ backgroundImage: `url(${samarPoster})` }}
            style={{ backgroundImage: `url(${firstImg})` }}
            className="page-first-image-bg"
          />
          </div>
        
          date 
          <div data-aos="fade-left" data-aos-duration="2000" className="date-img">
            <div
              style={{ backgroundImage: `url(${dateImg})` }}
              className="date-img-bg"
            />
            <div data-aos="fade-down" className="heading-presentsYou"> 
              <div className="text-container">
                 <p className="text"> PRESENTS YOU . . . </p> 
              </div>
            </div>
          </div> */}
        

          <div data-aos="fade-down" className="heading-schedule"> 
              SCHEDULE
          </div>


        {/* Landing Page banner */}
        <div data-aos="zoom-in"
        data-aos-duration="2000"
        className="page-banner">
        {/* <div data-aos="fade-up"
        data-aos-duration="2000"
        className="page-banner"> */}
          <div
            style={{ backgroundImage: `url(${pikachu})` }}
            className="page-banner-bg"
          />
          {toggle ? (
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              // style={{ height: '100%' }}
              className="samar-swiper-class"
              navigation
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}>

                {/* football  */}
            <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>FOOTBALL</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table className="football">
                          {/* <tr>
                                                <th>Date </th>
                                                <th>Fixture </th>
                                                <th>time</th>
                                            </tr> */}
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row1">
                              Min+Arch+MSc+Mtech Vs Civil+CSE+MCA
                            </td>
                            <td>16:00-17:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row1">Chem+EE Vs BT+IT</td>
                            <td>17:30-18:30</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row1">
                              Mec+Elex Vs Civil+CSE+MCA
                            </td>
                            <td>19:00-20:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row1">Meta+Biomed Vs Chem++EE</td>
                            <td>16:00-17:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>FOOTBALL</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table className="football">
                          {/* <tr>
                                                <th>Date </th>
                                                <th>Fixture </th>
                                                <th>time</th>
                                            </tr> */}
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row1">
                              Mech+Elex Vs Min+Arch+MSc+Mtech
                            </td>
                            <td>17:30-18:30</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row1">Meta+Biomed Vs BT +IT</td>
                            <td>19:00-20:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row1">TBD Vs TBD</td>
                            <td>16:00-17:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row1">TBD Vs TBD</td>
                            <td>17:30-18:30</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row1">TBD Vs TBD</td>
                            <td>19:00-20:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* cricket  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>CRICKET</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table className="cricket">
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row1">Mech+Elex Vs BT+IT</td>
                            <td>12:30-14:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row1">
                              Min+Arch+MSc+MTech vs Civil+CSE+MCA
                            </td>
                            <td>14:30-16:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row1">Chem+EE vs BT+IT</td>
                            <td>16:30-18:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row1">
                              Mining+Arch+MSc+MTech vs Meta+BM
                            </td>
                            <td>12:30-14:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row1">Mech+ECE vs Chem+EE</td>
                            <td>14:30-16:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* basketball  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>BASKETBALL</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">Mech+ECE Vs BT+IT</td>
                            <td>17:30</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">
                              Min+Arch+MSc+MTech vs Civil+CSE+MCA
                            </td>
                            <td>18:30</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">Chem+EE vs BT+IT</td>
                            <td>19:30</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                              Min+Arch+MSc+MTech vs Meta+BM
                            </td>
                            <td>17:30</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Mech+ECE vs Chem+EE</td>
                            <td>18:30</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>BASKETBALL</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}

                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                              Meta+BM vs Civil+CSE+MCA
                            </td>
                            <td>19:30</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>19:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* volleyball  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Volley-Ball</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">Mech+ECE vs Chem+EE</td>
                            <td>15:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">
                              Min+Arch+MSc+MTech vs Meta+BM
                            </td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">Chem+EE vs BT+IT</td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                              Min+Arch+MSc+MTech vs Civil+CSE+MCA
                            </td>
                            <td>15:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Mech+ECE vs BT+IT</td>
                            <td>16:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Volley-Ball</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                              Meta+BM vs Civil+CSE+MCA
                            </td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>15:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>16:30</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row">Final --TBD Vs TBD</td>
                            <td>16:00 to 18:30</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* handball  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Hand-Ball</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">Mech+ECE vs Chem+EE</td>
                            <td>15:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">
                              Min+Arch+MSc+MTech vs Meta+BM
                            </td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">Chem+EE vs BT+IT</td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                              Min+Arch+MSc+MTech vs Civil+CSE+MCA
                            </td>
                            <td>15:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Mech+Elex vs BT+IT</td>
                            <td>16:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Hand-Ball</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                              Meta+BM vs Civil+CSE+MCA
                            </td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>15:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>16:30</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row">Final --TBD Vs TBD</td>
                            <td>16:00 to 17:30</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* kabaddi  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Kabaddi</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">Mech+ECE vs Chem+EE</td>
                            <td>9:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">
                              Min+Arch+MSc+MTech vs Civil+CSE+MCA
                            </td>
                            <td>10:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row"> Mech+ECE vs BT+IT</td>
                            <td>11:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                              Min+Arch+MSc+MTech vs Meta+BM
                            </td>
                            <td>9:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Chem+ECE vs BT+IT</td>
                            <td>10:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Kabaddi</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                              Meta+BM vs Civil+CSE+MCA
                            </td>
                            <td>11:00</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>9:00</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>10:00</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row">Final --TBD Vs TBD</td>
                            <td>12:00 to 13:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* kho kho  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>KHO-KHO</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">Mech+ECE vs Chem+EE</td>
                            <td>13:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">
                              Min+Arch+MSc+MTech vs Civil+CSE+MCA
                            </td>
                            <td>14:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row"> Mech+ECE vs BT+IT</td>
                            <td>15:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                              Min+Arch+MSc+MTech vs Meta+BM
                            </td>
                            <td>13:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Chem+ECE vs BT+IT</td>
                            <td>14:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>KHO-KHO</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                              Meta+BM vs Civil+CSE+MCA
                            </td>
                            <td>15:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>15:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row">Final --TBD Vs TBD</td>
                            <td>18:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* badminton  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>BADMINTON</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <center>
                          <h1>26 jan----COURT 1</h1>
                        </center>
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}

                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">Mech+ECE vs Mining+Archi+MSE+MTECH</td>
                            <td>18:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">Mech+ECE vs Mining+Archi+MSE+MTECH</td>
                            <td>18:20</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">Mech+ECE vs Mining+Archi+MSE+MTECH</td>
                            <td>18:40</td>
                          </tr>
                        </table>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>BADMINTON</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                    
                        <center>
                          <h1>26 jan----COURT 1</h1>
                        </center>
                        <table>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                              Chem+Elex+PHD vs Meta+BM
                            </td>
                            <td>19:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                            Chem+Elex+PHD vs Meta+BM
                            </td>
                            <td>19:20</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                            Chem+Elex+PHD vs Meta+BM
                            </td>
                            <td>19:40</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* new code */}
              
              {/* badminton  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>BADMINTON</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table className="cricket">
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row1">Civil+Cse+Mca vs Mining+Archi+Msc+Mtech</td>
                            <td>18:00-19:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row1">
                            Meta+Bmd vs Biotech+IT

                            </td>
                            <td>19:00-20:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row1">Mech+Elex vs Civil+Cse+Mca</td>
                            <td>18:00-19:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row1">Chem+Elex+Phd vs Biotech+IT</td>
                            <td>19:00-20:00</td>
                          </tr>
                          
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>


              {/* table tennis  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Table Tennis</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                      <center>
                            <h1>26 jan----TABLE 1</h1>
                          </center>
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}                     
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">Mech+ECE vs Chem+EE</td>
                            <td>13:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                              Mech +Elex vs Chem + Elect
                            </td>
                            <td>14:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">Chem + ECE vs BT + IT</td>
                            <td>15:00</td>
                          </tr>
                          </table>
                
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Table Tennis</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
            
                          <center>
                            <h1>26 jan----TABLE 2</h1>
                          </center>
                          <table>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                              Min+Arch+MSc+Mtech Vs Meta+BME
                            </td>
                            <td>13:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                              Min+Arch+MSc+Mtech vs Meta+BME
                            </td>
                            <td>14:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                              Min+Arch+MSc+MTech Vs CE+CSE+MCA
                            </td>
                            <td>15:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Table Tennis</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                      <center>
                            <h1>27 jan----TABLE 1</h1>
                          </center>
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                        
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">BM + IT vs Chem+Elect</td>
                            <td>13:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">Mech +ECE vs BT + IT</td>
                            <td>14:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">Mech + ECE vs BM + IT</td>
                            <td>15:00</td>
                          </tr>
                          </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Table Tennis</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                          <center>
                            <h1>27 jan----TABLE 2</h1>
                          </center>
                          <table>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                              Min+Arch+MSc+Mtech Vs Meta+CE+CSE+
                              MCA
                            </td>
                            <td>13:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                              Meta + BM vs Meta + Civil + CSE + MCA
                            </td>
                            <td>14:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                              Meta + BM vs Civil + CSE + MCA
                            </td>
                            <td>15:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          ) : (
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              // style={{ height: '100%' }}
              className="samar-swiper-class"
              navigation
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}>
              
              {/* cricket  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>CRICKET</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table className="cricket">
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row1">Mech +Arch +MCA vs ECE +ChE+ EE</td>
                            <td>07:30-9:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row1">
                            Meta+Min+CSE+BME vs IT+BT+CE+M.Tech

                            </td>
                            <td>09:00-10:30</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row1">Mech+Arch+MCA vs Meta+Min+CSE+BME</td>
                            <td>10:30-12:00</td>
                          </tr>
                          
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>CRICKET</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table className="cricket">
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row1">
                            ECE+ChE+EE vs IT+BT+CE+M.Tech
                            </td>
                            <td>07:30-09:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row1">Mech+Arch+MCA vs Mech+Arch+MCA</td>
                            <td>09:00-10:30</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row1">ECE+ChE+EE vs Meta+Min+CSE+BME</td>
                            <td>10:30-12:00</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row1">TBD Vs TBD</td>
                            <td>07:30-09:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
             </SwiperSlide>

             {/* basketball  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>BASKETBALL</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA Vs ECE+ChE+EE</td>
                            <td>07:30</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                            Meta+Min+CSE+BME vs IT+BT+CE+M.Tech
                            </td>
                            <td>08:30</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Meta+Min+CSE+BME vs Mech+Arch+MCA</td>
                            <td>09:30</td>
                          </tr>
                          
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>BASKETBALL</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}

                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">
                            ECE+ChE+EE vs IT+BT+CE+M.Tech
                            </td>
                            <td>07:30</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">ECE+ChE+EE Vs Meta+Min+CSE+BM</td>
                            <td>08:30</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA Vs IT+BT+CE+M.Tech</td>
                            <td>09:30</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>09:30</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* volleyball  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Volley-Ball</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs ECE+ChE+EE</td>
                            <td>10:30</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                            Meta+Min+CSE+BME vs IT+BT+CE+M.Tech
                            </td>
                            <td>11:30</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs Meta+Min+CSE+BME</td>
                            <td>12:30</td>
                          </tr>
                          
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Volley-Ball</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                      <tr>
                        <td>28 Jan</td>
                        <td className="mid_row">
                        ECE+ChE+EE vs IT+BT+CE+M.Tech
                        </td>
                        <td>10:30</td>
                      </tr>
                      <tr>
                        <td>28 Jan</td>
                        <td className="mid_row">ECE+ChE+EE Vs Meta+Min+CSE+BME</td>
                        <td>11:30</td>
                      </tr>
                      <tr>
                        <td>28 Jan</td>
                        <td className="mid_row">Mech+Arch+MCA Vs IT+BT+CE+M.Tech</td>
                            <td>12:30</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row">Final --TBD Vs TBD</td>
                            <td>10:30</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* handball  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Hand-Ball</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs ECE+ChE+EE</td>
                            <td>11:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                            Meta+Min+CSE+BME vs IT+BT+CE+M.Tech
                            </td>
                            <td>12:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs Meta+Min+CSE+BME</td>
                            <td>13:00</td>
                          </tr>
                          
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Hand-Ball</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                      <tr>
                        <td>28 Jan</td>
                        <td className="mid_row">
                        ECE+ChE+EE vs IT+BT+CE+M.Tech
                        </td>
                        <td>11:00</td>
                      </tr>
                      <tr>
                        <td>28 Jan</td>
                        <td className="mid_row">IT+BT+CE+M.Tech Vs Meta+Min+CSE+BME</td>
                        <td>12:00</td>
                      </tr>
                      <tr>
                        <td>28 Jan</td>
                        <td className="mid_row">Mech+Arch+MCA Vs  Meta+Min+CSE+BME</td>
                            <td>13:00</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>11:30</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* kabaddi  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Kabaddi</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs ECE+ChE+EE</td>
                            <td>09:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                            Meta+Min+CSE+BME vs IT+BT+CE+M.Tech
                            </td>
                            <td>10:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs Meta+Min+CSE+BME</td>
                            <td>11:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Kabaddi</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">
                            ECE+ChE+EE vs IT+BT+CE+M.Tech
                            </td>
                            <td>09:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">ECE+ChE+EE Vs Meta+Min+CSE+BME</td>
                            <td>10:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs IT+BT+CE+M.Tech</td>
                            <td>11:00</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>11:30</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* kho kho  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>KHO-KHO</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs ECE+ChE+EE</td>
                            <td>15:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">
                            Meta+Min+CSE+BME vs IT+BT+CE+M.Tech
                            </td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs Meta+Min+CSE+BME</td>
                            <td>17:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>KHO-KHO</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                            ECE+ChE+EE vs IT+BT+CE+M.Tech
                            </td>
                            <td>15:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">ECE+ChE+EE Vs Meta+Min+CSE+BME</td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs IT+BT+CE+M.Tech</td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>17:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* badminton  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>BADMINTON</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <center>
                          <h1>26 jan----COURT 1</h1>
                        </center>
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}

                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">IT+Biotech+Civil+Mtech vs Elex+Chem+EE</td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">IT+Biotech+Civil+Mtech vs Elex+Chem+EE</td>
                            <td>16:20</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">IT+Biotech+Civil+Mtech vs Elex+Chem+EE</td>
                            <td>16:40</td>
                          </tr>
                        </table>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>BADMINTON</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                    
                        <table>
                          <tr>
                            <td>26 JAN</td>
                            <td className="mid_row">
                            Mech+Archi+Mca vs Meta+Mining+Cse+Bme
                            </td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>27 JAN</td>
                            <td className="mid_row">
                            Elex+Chem+EE vs Mech+Archi+Mca
                            </td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>27 JAN</td>
                            <td className="mid_row">
                            Meta+Mining+Cse+Bme Vs IT+BT+Civil+MTech
                            </td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>28 JAN</td>
                            <td className="mid_row">
                            Mech+Archi+Mca Vs IT+BT+CE+M.Tech
                            </td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>28 JAN</td>
                            <td className="mid_row">
                            ECE+ChE+EE Vs Meta+Mining+Cse+Bme
                            </td>
                            <td>17:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* table tennis  */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Table Tennis</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                      <center>
                            <h1>26 jan----TABLE 1</h1>
                          </center>
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}                     
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">Mech+Arch+MCA Vs ECE+ChE+EE</td>
                            <td>13:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                            Mech+Arch+MCA Vs ECE+ChE+EE
                            </td>
                            <td>14:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">Mech+Arch+MCA Vs Meta+Min+CSE+BME</td>
                            <td>15:00</td>
                          </tr>
                          </table>
                
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Table Tennis</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
            
                          <center>
                            <h1>26 jan----TABLE 2</h1>
                          </center>
                          <table>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                            Meta+Min+CSE+BME Vs IT+BT+CE+M.Tech
                            </td>
                            <td>13:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                            Meta+Min+CSE+BME Vs IT+BT+CE+M.Tech
                            </td>
                            <td>14:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                            ECE+ChE+EE VS IT+BT+CE+M.Tech
                            </td>
                            <td>15:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Table Tennis</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                      <center>
                            <h1>27 jan----TABLE 1</h1>
                          </center>
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                        
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">Mech+Arch+MCA Vs Meta+Min+CSE+BME</td>
                            <td>13:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">Mech+Arch+MCA  vs IT+BT+CE+M.Tech</td>
                            <td>14:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">Mech+Arch+MCA  vs IT+BT+CE+M.Tech</td>
                            <td>15:00</td>
                          </tr>
                          </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Table Tennis</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                          <center>
                            <h1>27 jan----TABLE 2</h1>
                          </center>
                          <table>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                            ECE+ChE+EE Vs IT+BT+CE+M.Tech
                            </td>
                            <td>13:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                            ECE+ChE+EE Vs Meta+Min+CSE+BME
                            </td>
                            <td>14:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                            ECE+ChE+EE Vs Meta+Min+CSE+BME
                            </td>
                            <td>15:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
          )}
        </div>
                                             
        {/* toggle  */}
        <div data-aos="fade-up" className="home-toggle-button">
          <div className="flex justify-center items-center ">
            {/*   Switch Container */}
            <div className="toggle-text-div">
              <p>Boys</p>
            </div>
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
                console.log(toggle);
              }}>
              <div
                className={
                  "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? null : toggleClass)
                }></div>
            </div>
            <div className="toggle-text-div">
              <p>Girls</p>
            </div>
          </div>
        </div>

        {/* Samar Countdown */}

          <div data-aos="fade-down" className="heading-countdown"> 
           COUNTDOWN
          </div>

        <div className="count-down flex">
          <div data-aos="fade-right" className="count-down-div">
            <p className="count-div-item-1 heading-time">{days<10 ? "0"+days : days}</p>
            <p className="heading-DaysHMS">Days</p>
          </div>  
          {/* <div data-aos="fade-right" className="count-down-div"> */}
          <div data-aos="zoom-out" className="count-down-div">
            <p className="count-div-item-1 heading-time">{hours<10 ? "0"+hours : hours}</p>
            <p className="heading-DaysHMS">Hours</p>
          </div>  
          {/* <div data-aos="fade-left" className="count-down-div"> */}
          <div data-aos="zoom-out" className="count-down-div">
            <p className="count-div-item-1 heading-time">{minutes<10 ? "0"+minutes : minutes}</p>
            <p className="heading-DaysHMS">Minutes</p>
          </div>  
          <div data-aos="fade-left" className="count-down-div">
            <p className="count-div-item-1 heading-time">{seconds<10 ? "0"+seconds : seconds}</p>
            <p className="heading-DaysHMS">Seconds</p>
          </div>  
        </div>  

        
        {/* teams  */}

          <div data-aos="fade-down" className="heading-our-team"> 
                OUR TEAMS
          </div>
          
          {/* line 1  */}
          <div class=" flex flex-col lg:flex-row items-center justify-center p-20">
            <div data-aos="fade-right" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
              <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
              <div class="bg-white h-full flex-1 bg-opacity-50"></div>
              <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

                <div className="team-image">
                  <div
                    style={{ backgroundImage: `url(${team1})` }}
                    className="team-image-bg"
                  />
                </div>
              </div>
            </div>
            <div  data-aos="zoom-in" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
              <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
              <div class="bg-white h-full flex-1 bg-opacity-50"></div>
              <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

                <div className="team-image">
                  <div
                    style={{ backgroundImage: `url(${team2})` }}
                    className="team-image-bg"
                  />
                </div>
              </div>
            </div>
            <div data-aos="fade-left" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
              <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
              <div class="bg-white h-full flex-1 bg-opacity-50"></div>
              <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

                <div className="team-image">
                  <div
                    style={{ backgroundImage: `url(${team3})` }}
                    className="team-image-bg"
                  />
                </div>
              </div>
            </div>
          </div>

           {/* line 2  */}
          <div class=" flex flex-col lg:flex-row items-center justify-center p-20">
            <div data-aos="fade-right" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
              <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
              <div class="bg-white h-full flex-1 bg-opacity-50"></div>
              <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

                <div className="team-image">
                  <div
                    style={{ backgroundImage: `url(${team4})` }}
                    className="team-image-bg"
                  />
                </div>
              </div>
            </div>
            <div  data-aos="zoom-in" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
              <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
              <div class="bg-white h-full flex-1 bg-opacity-50"></div>
              <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

                <div className="team-image">
                  <div
                    style={{ backgroundImage: `url(${team5})` }}
                    className="team-image-bg"
                  />
                </div>
              </div>
            </div>
            <div data-aos="fade-left" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
              <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
              <div class="bg-white h-full flex-1 bg-opacity-50"></div>
              <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

                <div className="team-image">
                  <div
                    style={{ backgroundImage: `url(${team6})` }}
                    className="team-image-bg"
                  />
                </div>
              </div>
            </div>
          </div>


           {/* line 3  */}
          <div class=" flex flex-col lg:flex-row items-center justify-center p-20">
            <div data-aos="fade-right" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
              <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
              <div class="bg-white h-full flex-1 bg-opacity-50"></div>
              <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

                <div className="team-image">
                  <div
                    style={{ backgroundImage: `url(${team7})` }}
                    className="team-image-bg"
                  />
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
              <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
              <div class="bg-white h-full flex-1 bg-opacity-50"></div>
              <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

                <div className="team-image">
                  <div
                    style={{ backgroundImage: `url(${team8})` }}
                    className="team-image-bg"
                  />
                </div>
              </div>
            </div>
            <div data-aos="fade-left" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
              <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
              <div class="bg-white h-full flex-1 bg-opacity-50"></div>
              <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

                <div className="team-image">
                  <div
                    style={{ backgroundImage: `url(${team9})` }}
                    className="team-image-bg"
                  />
                </div>
              </div>
            </div>
          </div>

         {/* gallery event and merchandise  */}
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
        <div className="embadded-video">
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

        {/* speakers, schedule, sponsers, gallary */}
        {/* <div className='flex sssg-container'>
            <div className="sssg gallery">
                <Link
                    onClick={() => {
                                setActiveLink(4)
                            }}
                            to='/gallery'
                >
                    <div className='card sssg-item-3'>
                       <img src="https://cdn-icons-png.flaticon.com/128/1040/1040241.png" alt="" />
                        </div>
                 
                    <p>Gallary</p>
                </Link>
            </div>
                
            <div className="sssg merchandise">
                <Link
                    onClick={() => {
                                setActiveLink(2)
                            }}
                            to='/merchandise'
                >
                    <div className='card sssg-item-2'>
                       
                        <img src="https://cdn-icons-png.flaticon.com/512/3176/3176395.png" alt="" />
                        </div>
                   
                    <h3>Merchandise</h3>
                </Link>
            </div>

            <div className="sssg sponsers">
                <Link
                    onClick={() => {
                                setActiveLink(3)
                            }}
                            to='/sponsors'
                >
                    <div className='card sssg-item-'>
                       
                            <img src="	https://live.staticflickr.com/65535/52395640653_0ba071af3a_c.jpg" alt="" />
                       
                    </div>
                    <p>Sponsers</p>
                </Link>
            </div> */}
      </div>

     
      </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Home;
