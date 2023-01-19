import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BasketBallImg from "../../Assets/Images/basketBallImg.png";
import Merchandise from "../../Assets/Images/Merchandise.jpg";
import './home.component.css'

import { NavbarContext } from '../../contexts/navbar.context'

// import Swiper core and required modules
import {Autoplay,  Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Home() {
    const { setActiveLink } = useContext(NavbarContext);
    let date = new Date();

    const [seconds, setSeconds] = useState(date.getSeconds());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [hours, setHours] = useState(date.getHours());
    const [currDate, setDate] = useState(date.getDate());

    setInterval(() => {
        const countDownDate = new Date("Jan 26, 2023").getTime();

        const currTime = new Date().getTime();
        var timeleft = countDownDate - currTime;
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        setSeconds(seconds);
        setMinutes(minutes);
        setHours(hours);
        setDate(days);
    }, 1000)

    return (
        <>
        <div className='home-container'>
            {/* Landing Page banner */}
            <div className='page-banner'>
                    <div style={{ backgroundImage: `url(${BasketBallImg})` }} className='page-banner-bg' />
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
                        pagination={{ clickable: true }}
                      >
                       <SwiperSlide>
                            <div className="carousal-page">
                                <div className="carousal-page-heading">
                                    <h1>Day-1</h1>
                                </div>
                                <div className="carousal-page-content">
                                    <div className='carousal_tabledata'>
                                        <div className="carousal-page-content-gameName">
                                         <table className='info_table'>
                                            {/* <tr>
                                                <th>game</th>
                                                <th>time</th>
                                            </tr> */}
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            
                                         </table> 
                                        </div>
                                        <div className="carousal-page-content-gameName">
                                         <table>
                                            {/* <tr>
                                                <th>game</th>
                                                <th>time</th>
                                            </tr> */}
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
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
                                    <h1>Day-2</h1>
                                </div>
                                <div className="carousal-page-content">
                                    <div className='carousal_tabledata'>
                                        <div className="carousal-page-content-gameName">
                                         <table className='info_table'>
                                            {/* <tr>
                                                <th>game</th>
                                                <th>time</th>
                                            </tr> */}
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            
                                         </table> 
                                        </div>
                                        <div className="carousal-page-content-gameName">
                                         <table>
                                            {/* <tr>
                                                <th>game</th>
                                                <th>time</th>
                                            </tr> */}
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
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
                                    <h1>Day-3</h1>
                                </div>
                                <div className="carousal-page-content">
                                    <div className='carousal_tabledata'>
                                        <div className="carousal-page-content-gameName">
                                         <table className='info_table'>
                                            {/* <tr>
                                                <th>game</th>
                                                <th>time</th>
                                            </tr> */}
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            
                                         </table> 
                                        </div>
                                        <div className="carousal-page-content-gameName">
                                         <table>
                                            {/* <tr>
                                                <th>game</th>
                                                <th>time</th>
                                            </tr> */}
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
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
                                    <h1>Day-4</h1>
                                </div>
                                <div className="carousal-page-content">
                                    <div className='carousal_tabledata'>
                                        <div className="carousal-page-content-gameName">
                                         <table className='info_table'>
                                            {/* <tr>
                                                <th>game</th>
                                                <th>time</th>
                                            </tr> */}
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            
                                         </table> 
                                        </div>
                                        <div className="carousal-page-content-gameName">
                                         <table>
                                            {/* <tr>
                                                <th>game</th>
                                                <th>time</th>
                                            </tr> */}
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>
                                            <tr>
                                                <td>Cricket</td>
                                                <td>10:00 am</td>
                                            </tr>                                           
                                         </table>                                         
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                      </Swiper>
            </div>


                {/* Samar Countdown */}
                <div className="count-down flex">
                    <div className='count-down-div'>
                        <p className='count-div-item-1'>{currDate}</p>
                        <p>Days</p>
                    </div>
                    <div className='count-down-div'>
                        <p className='count-div-item-1'>{hours}</p>
                        <p>Hours</p>
                    </div>
                    <div className='count-down-div'>
                        <p className='count-div-item-1'>{minutes}</p>
                        <p>Minutes</p>
                    </div>
                    <div className='count-down-div'>
                        <p className='count-div-item-1'>{seconds}</p>
                        <p>Seconds</p>
                    </div>
                </div>

                {/* Samar Youtube */}
                <div className="embadded-video">
                
                    <div className="video-2">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UBsDzaOYTTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
                    </div>
                    <div className="video-1">
                         <iframe width="560" height="315" src="https://www.youtube.com/embed/HLTSKIlLRPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
                    </div>
                    <div className="video-3">
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/s7DYDkOeaKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
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
                <div className="cards-container">
<div className="gallery-container">
<Link
                    onClick={() => {
                                setActiveLink(4)
                            }}
                            to='/gallery'
                >
                   
  <div className="heading-container-cards">
<h2>Gallery</h2>
  </div>
  <div className="image-container">
    <img src="https://live.staticflickr.com/65535/52395640653_0ba071af3a_c.jpg"></img>
  </div>
  </Link>
</div>
<div className="events-container">
<Link
                    onClick={() => {
                                setActiveLink(4)
                            }}
                            to='/events'
                >
            
<div className="heading-container-cards">
<h2>Events</h2>
  </div>
  <div className="image-container">
    <img src="https://live.staticflickr.com/65535/52395134666_1d271cefb3_h.jpg"></img>
  </div>
  </Link>
</div>
<div className="merchandise-conatiner">
<Link
                    onClick={() => {
                                setActiveLink(4)
                            }}
                            to='/merchandise'
                >
            
<div className="heading-container-cards">
<h2>Merchandise</h2>
  </div>
  <div className="image-container">
    <img src={Merchandise} ></img>
  </div>
  </Link>
</div>

                </div>

            </>
            );
}

            export default Home
