import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BasketBallImg from "../../Assets/Images/basketBallImg.png";
import Merchandise from "../../Assets/Images/Merchandise.jpg";
import './home.component.css'

import { NavbarContext } from '../../contexts/navbar.context'

function Home() {
    const { setActiveLink } = useContext(NavbarContext);

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000)
    }, [])

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

                    {
                        // <div className="page-banner-carousal-div">
                        //     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        //         <div class="carousel-inner">
                        //             <div class="carousel-item active">

                        //             </div>
                        //             <div class="carousel-item">
                        //             </div>
                        //             <div class="carousel-item">
                        //             </div>
                        //         </div>
                        //         <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        //             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        //             <span class="sr-only">Previous</span>
                        //         </a>
                        //         <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        //             <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        //             <span class="sr-only">Next</span>
                        //         </a>
                        //     </div>
                        // </div>
                    }

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
