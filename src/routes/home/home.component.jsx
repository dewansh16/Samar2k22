import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import darkBasketBallImg from "../../Assets/Images/dark_basketBallImg.jpg";
import Merchandise from "../../Assets/Images/Merchandise.jpg";
import Djnight from "../../Assets/Images/gallery-images/DJ Night.webp";
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
  const [currDate, setDate] = useState(date.getDate());
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";

  setInterval(() => {
    const countDownDate = new Date("Jan 26, 2023").getTime();

    const currTime = new Date().getTime();
    var timeleft = countDownDate - currTime;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    setSeconds(seconds);
    setMinutes(minutes);
    setHours(hours);
    setDate(days);
  }, 1000);

  return (
    <>
      <div className="home-container">
        {/* Landing Page banner */}
        <div className="page-banner">
          <div
            style={{ backgroundImage: `url(${darkBasketBallImg})` }}
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
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>FOOTBALL</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table>
                          {/* <tr>
                                                <th>Date </th>
                                                <th>Fixture </th>
                                                <th>time</th>
                                            </tr> */}
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">
                              Min+Arch+MSc+Mtech Vs Civil+CSE+MCA
                            </td>
                            <td>16:00-17:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">Chem+EE Vs BT+IT</td>
                            <td>17:30-18:30</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">
                              Mec+Elex Vs Civil+CSE+MCA
                            </td>
                            <td>19:00-20:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Meta+Biomed Vs Chem++EE</td>
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
                        <table class>
                          {/* <tr>
                                                <th>Date </th>
                                                <th>Fixture </th>
                                                <th>time</th>
                                            </tr> */}
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                              Mech+Elex Vs Min+Arch+MSc+Mtech
                            </td>
                            <td>17:30-18:30</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Meta+Biomed Vs BT +IT</td>
                            <td>19:00-20:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>16:00-17:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>17:30-18:30</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>19:00-20:00</td>
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
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">Mech+Elex Vs BT+IT</td>
                            <td>12:30-14:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">
                              Min+Arch+MSc+MTech vs Civil+CSE+MCA
                            </td>
                            <td>14:30-16:00</td>
                          </tr>
                          <tr>
                            <td>26 Jan</td>
                            <td className="mid_row">Chem+EE vs BT+IT</td>
                            <td>16:30-18:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">
                              Mining+Arch+MSc+MTech vs Meta+BM
                            </td>
                            <td>12:30-14:00</td>
                          </tr>
                          <tr>
                            <td>27 Jan</td>
                            <td className="mid_row">Mech+ECE vs Chem+EE</td>
                            <td>14:30-16:00</td>
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
                            <td>14:30-16:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>12:30-14:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>14:30-16:00</td>
                          </tr>
                          <tr>
                            <td>29 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>12:30-14:00</td>
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
                            <td className="mid_row">Mech+ECE vs Chem+EE</td>
                            <td>13:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">Mech +ECE vs Chem + EE</td>
                            <td>14:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">Chem + EE vs BT + IT</td>
                            <td>15:00</td>
                          </tr>
                        </table>
                        <center>
                          <h1>26 jan----COURT 2</h1>
                        </center>
                        <table>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                              Min+Arch+MSC+Mtech vs Meta + BM
                            </td>
                            <td>13:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                              Min+Arch+MSc+Mtech vs Meta + BM
                            </td>
                            <td>14:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                              Min+Arch+MSc+MTech vs Civil+CSE+MCA
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
                    <h1>BADMINTON</h1>
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
                          <center>
                            <h1>27 jan----COURT 1</h1>
                          </center>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">BM+ IT vs Chem+EE</td>
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
                          <center>
                            <h1>27 jan----COURT 2</h1>
                          </center>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                              Min + Arch +MSc +M tech vs Meta + Civil + CSE +
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
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Table Tennis</h1>
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
                          <center>
                            <h1>26 jan----COURT 1</h1>
                          </center>
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
                          <center>
                            <h1>26 jan----COURT 2</h1>
                          </center>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                              Min + Arch +MSC +M tech vs Meta + Bio-med
                            </td>
                            <td>13:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                              Min + Arch +MSc +M tech vs Meta + BM
                            </td>
                            <td>14:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                              Min + Arch +MSc + M Tech vs Civil + CSE + MCA
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
                        <table>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <center>
                            <h1>27 jan----COURT 1</h1>
                          </center>
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
                          <center>
                            <h1>27 jan----COURT 2</h1>
                          </center>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                              Min + Arch +MSc +M tech vs Meta + Civil + CSE +
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
                              {" "}
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
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Girls div</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>Girls div 2</h1>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </div>

        <div className="home-toggle-button">
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
        <div className="count-down flex">
          <div className="count-down-div">
            <p className="count-div-item-1">{currDate}</p>
            <p>Days</p>
          </div>
          <div className="count-down-div">
            <p className="count-div-item-1">{hours}</p>
            <p>Hours</p>
          </div>
          <div className="count-down-div">
            <p className="count-div-item-1">{minutes}</p>
            <p>Minutes</p>
          </div>
          <div className="count-down-div">
            <p className="count-div-item-1">{seconds}</p>
            <p>Seconds</p>
          </div>
        </div>

        {/* Samar Youtube */}
        <div className="embadded-video">
          <div className="video-2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/UBsDzaOYTTo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div className="video-1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HLTSKIlLRPE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div className="video-3">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/s7DYDkOeaKg"
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
      <div className="cards-container">
        <div className="gallery-container">
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
        <div className="events-container">
          <Link
            onClick={() => {
              setActiveLink(4);
            }}
            to="/events">
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
              setActiveLink(4);
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
    </>
  );
}

export default Home;
