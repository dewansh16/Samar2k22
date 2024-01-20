import {useState} from 'react'
import "./home.component.css";
// import pikachu from "../../Assets/Images/pikachu.jpg";
// import scheduleBg from "../../Assets/Images/schedule-bg.jpeg";
// import scheduleBg1 from "../../Assets/Images/schedule-bg1.webp";
// import scheduleBg2 from "../../Assets/Images/schedule-bg2.webp";

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import StarWrapper from "../../hoc/StarWrapper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Schedule = () => {

    const [toggle, setToggle] = useState(true);
    const toggleClass = " transform translate-x-5";

  return (
    <>
        <div data-aos="fade-down" className="heading-schedule" id='about' > 
             <center> SCHEDULE  </center>
          </div>


      {/* Landing Page banner */}
        <div data-aos="zoom-in"
        data-aos-duration="2000"
        className="page-banner">
          <div
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
                            <td>18 Jan</td>
                            <td className="mid_row1">
                              BLACK BULL Vs GREEN MANTIS
                            </td>
                            <td>19:00-20:00</td>
                          </tr>
                          <tr>
                            <td>18 Jan</td>
                            <td className="mid_row1">CRIMSON LION Vs MIDNIGHT SUN</td>
                            <td>20:30-21:30</td>
                          </tr>
                          <tr>
                            <td>18 Jan</td>
                            <td className="mid_row1">
                              SILVER EAGLE Vs GREEN MANTIS
                            </td>
                            <td>22:00-23:00</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row1">GOLDEN DAWN Vs CRIMSON LION</td>
                            <td>19:00-20:00</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row1">SILVER EAGLE Vs BLACK BULL</td>
                            <td>20:30-21:30</td>
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
                            <td>19 Jan</td>
                            <td className="mid_row1">
                              GOLDEN DAWN Vs MIDNIGHT SUN
                            </td>
                            <td>22:00-23:00</td>
                          </tr>
                          <div className="stages">SEMIFINAL</div>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row1">
                              TBD Vs TBD
                            </td>
                            <td>19:00-20:00</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row1">TBD Vs TBD</td>
                            <td>20:30-21:30</td>
                          </tr>
                          <div className="stages">FINAL</div>
                          <tr>
                            <td>21 Jan</td>
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
                            <td>19 Jan</td>
                            <td className="mid_row1">
                              BLACK BULL Vs GREEN MANTIS
                            </td>
                            <td>19:00-20:00</td>
                          </tr>
                          <tr>
                            <td>18 Jan</td>
                            <td className="mid_row1">CRIMSON LION Vs MIDNIGHT SUN</td>
                            <td>20:30-21:30</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row1">
                              SILVER EAGLE Vs GREEN MANTIS
                            </td>
                            <td>22:00-23:00</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row1">GOLDEN DAWN Vs CRIMSON LION</td>
                            <td>19:00-20:00</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row1">SILVER EAGLE Vs BLACK BULL</td>
                            <td>20:30-21:30</td>
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
                            <td>19 Jan</td>
                            <td className="mid_row1">
                              GOLDEN DAWN Vs MIDNIGHT SUN
                            </td>
                            <td>22:00-23:00</td>
                          </tr>
                          <div className="stages">SEMIFINAL</div>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row1">
                              TBD Vs TBD
                            </td>
                            <td>19:00-20:00</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row1">TBD Vs TBD</td>
                            <td>20:30-21:30</td>
                          </tr>
                          <div className="stages">FINAL</div>
                          <tr>
                            <td>21 Jan</td>
                            <td className="mid_row1">TBD Vs TBD</td>
                            <td>19:00-20:00</td>
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
                        <table className='basketball'>
                          {/* <tr>
                                                <th>Date</th>
                                                <th>Fixture</th>
                                                <th>Time</th>
                                            </tr>
                                             */}
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row">SILVER EAGLE Vs LANMISTERS</td>
                            <td>17:30-18:30</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row">
                              CRIMSON LION vs GREEN MANTIS
                            </td>
                            <td>18:30-19:30</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row">CRIMSON LION vs HIHG TOWER</td>
                            <td>19:30-20:30</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">
                              BLACK BULL vs CRIMSON LION
                            </td>
                            <td>17:30-18:30</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">LANMISTERS Vs MIDNIGHT SUN</td>
                            <td>18:30-19:30</td>
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
                            <td>20 Jan</td>
                            <td className="mid_row">
                              BLACK BULL vs GREEN MANTIS
                            </td>
                            <td>19:30-20:30</td>
                          </tr>
                          <div className="stages">SEMIFINAL</div>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>17:00</td>
                          </tr>
                          <div className="stages">FINAL</div>
                          <tr>
                            <td>20 Jan</td>
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
                            <td>19 Jan</td>
                            <td className="mid_row">SILVER EAGLE Vs LANMISTERS</td>
                            <td>17:30-18:30</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row">
                              CRIMSON LION vs GREEN MANTIS
                            </td>
                            <td>18:30-19:30</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row">CRIMSON LION vs HIHG TOWER</td>
                            <td>19:30-20:30</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">
                              BLACK BULL vs CRIMSON LION
                            </td>
                            <td>17:30-18:30</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">LANMISTERS Vs MIDNIGHT SUN</td>
                            <td>18:30-19:30</td>
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
                            <td>20 Jan</td>
                            <td className="mid_row">
                              BLACK BULL vs GREEN MANTIS
                            </td>
                            <td>19:30-20:30</td>
                          </tr>
                          <div className="stages">SEMIFINAL</div>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>17:00</td>
                          </tr>
                          <div className="stages">FINAL</div>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>19:00</td>
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
                            <td>19 Jan</td>
                            <td className="mid_row">SILVER EAGLE Vs LANMISTERS</td>
                            <td>17:30-18:30</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row">
                              CRIMSON LION vs GREEN MANTIS
                            </td>
                            <td>18:30-19:30</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row">CRIMSON LION vs HIHG TOWER</td>
                            <td>19:30-20:30</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">
                              BLACK BULL vs CRIMSON LION
                            </td>
                            <td>17:30-18:30</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">LANMISTERS Vs MIDNIGHT SUN</td>
                            <td>18:30-19:30</td>
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
                            <td>20 Jan</td>
                            <td className="mid_row">
                              BLACK BULL vs GREEN MANTIS
                            </td>
                            <td>19:30-20:30</td>
                          </tr>
                          <div className="stages">SEMIFINAL</div>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>17:00</td>
                          </tr>
                          <div className="stages">FINAL</div>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>19:00</td>
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
                            <td>20 Jan</td>
                            <td className="mid_row">
                              BLACK BULL vs GREEN MANTIS
                            </td>
                            <td>19:30-20:30</td>
                          </tr>
                          <div className="stages">SEMIFINAL</div>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>17:00</td>
                          </tr>
                          <div className="stages">FINAL</div>
                          <tr>
                            <td>20 Jan</td>
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
                            <td>20 Jan</td>
                            <td className="mid_row">
                              BLACK BULL vs GREEN MANTIS
                            </td>
                            <td>19:30-20:30</td>
                          </tr>
                          <div className="stages">SEMIFINAL</div>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>17:00</td>
                          </tr>
                          <div className="stages">FINAL</div>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>19:00</td>
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
                            <td>20 Jan</td>
                            <td className="mid_row">
                              BLACK BULL vs GREEN MANTIS
                            </td>
                            <td>19:30-20:30</td>
                          </tr>
                          <div className="stages">SEMIFINAL</div>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>17:00</td>
                          </tr>
                          <div className="stages">FINAL</div>
                          <tr>
                            <td>20 Jan</td>
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
                            <td>20 Jan</td>
                            <td className="mid_row">
                              BLACK BULL vs GREEN MANTIS
                            </td>
                            <td>19:30-20:30</td>
                          </tr>
                          <div className="stages">SEMIFINAL</div>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>17:00</td>
                          </tr>
                          <div className="stages">FINAL</div>
                          <tr>
                            <td>20 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>19:00</td>
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
                          <h1>18 jan----COURT 1</h1>
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
                            <td className="mid_row">SILVER EAGLE vs LANNISTERS</td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">SILVER EAGLE vs LANNISTERS</td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">LANNISTERS vs MIDNIGHT SUN</td>
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
                          <h1>18 jan----COURT 2</h1>
                        </center>
                        <table>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                              BLACK BULL vs CRIMSON LION
                            </td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                            BLACK BULL vs CRIMSON LION
                            </td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                            CRIMSON LION vs GREEN MANTIS
                            </td>
                            <td>18:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* new code */}
              <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>BADMINTON</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <center>
                          <h1>19 jan----COURT 2</h1>
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
                            <td className="mid_row">CRIMSON LION vs GREEN MANTIS</td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">BLACK BULL vs GREEN MANTIS</td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">BLACK BULL vs GREEN MANTIS</td>
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
                          <h1>19 jan----COURT 1</h1>
                        </center>
                        <table>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                              LANNISTERS vs MIDNIGHT SUN
                            </td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                            SILVER EAGLE vs MIDNIGHT SUN
                            </td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                            SILVER EAGLE vs MIDNIGHT SUN
                            </td>
                            <td>18:00</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              
              {/* badminton  */}
              {/* <SwiperSlide>
                <div className="carousal-page">
                  <div className="carousal-page-heading">
                    <h1>BADMINTON</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                        <table className="cricket">
                          
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row1">GREEN MANTIS vs Mining+Archi+Msc+Mtech</td>
                            <td>18:00-19:00</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row1">
                            Meta+Bmd vs Biotech+IT

                            </td>
                            <td>19:00-20:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row1">Mech+Elex vs GREEN MANTIS</td>
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
              </SwiperSlide> */}


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
                            <h1>19 jan----TABLE 1</h1>
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
                            <td className="mid_row">
                              LANNISTERS vs MIDNIGHT SUN
                            </td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                            SILVER EAGLE vs MIDNIGHT SUN
                            </td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                            SILVER EAGLE vs MIDNIGHT SUN
                            </td>
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
                    <h1>Table Tennis</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
            
                          <center>
                            <h1>19 jan----TABLE 2</h1>
                          </center>
                          <table>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                              BLACK BULL vs CRIMSON LION
                            </td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">
                            BLACK BULL vs CRIMSON LION
                            </td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">
                            CRIMSON LION vs GREEN MANTIS
                            </td>
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
                    <h1>Table Tennis</h1>
                  </div>
                  <div className="carousal-page-content">
                    <div className="carousal_tabledata">
                      <div className="carousal-page-content-gameName">
                      <center>
                            <h1>20 jan----TABLE 1</h1>
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
                            <h1>20 jan----TABLE 2</h1>
                          </center>
                          <table>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">CRIMSON LION vs GREEN MANTIS</td>
                            <td>16:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">BLACK BULL vs GREEN MANTIS</td>
                            <td>17:00</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">BLACK BULL vs GREEN MANTIS</td>
                            <td>18:00</td>
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
                            <td>19 Jan</td>
                            <td className="mid_row1">Mech +Arch +MCA vs ECE +ChE+ EE</td>
                            <td>07:30-9:00</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row1">
                            Meta+Min+CSE+BME vs IT+BT+CE+M.Tech

                            </td>
                            <td>09:00-10:30</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
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
                            <td>19 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA Vs ECE+ChE+EE</td>
                            <td>07:30</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row">
                            Meta+Min+CSE+BME vs IT+BT+CE+M.Tech
                            </td>
                            <td>08:30</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
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
                            <td>19 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs ECE+ChE+EE</td>
                            <td>10:30</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row">
                            Meta+Min+CSE+BME vs IT+BT+CE+M.Tech
                            </td>
                            <td>11:30</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
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
                            <td>19 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs ECE+ChE+EE</td>
                            <td>11:00</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row">
                            Meta+Min+CSE+BME vs IT+BT+CE+M.Tech
                            </td>
                            <td>12:00</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
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
                            <td>19 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs ECE+ChE+EE</td>
                            <td>09:00</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row">
                            Meta+Min+CSE+BME vs IT+BT+CE+M.Tech
                            </td>
                            <td>10:00</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
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
                            <td>18 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs ECE+ChE+EE</td>
                            <td>15:00</td>
                          </tr>
                          <tr>
                            <td>18 Jan</td>
                            <td className="mid_row">
                            Meta+Min+CSE+BME vs IT+BT+CE+M.Tech
                            </td>
                            <td>19:00</td>
                          </tr>
                          <tr>
                            <td>18 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs Meta+Min+CSE+BME</td>
                            <td>20:00</td>
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
                            <td>19 Jan</td>
                            <td className="mid_row">
                            ECE+ChE+EE vs IT+BT+CE+M.Tech
                            </td>
                            <td>15:00</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row">ECE+ChE+EE Vs Meta+Min+CSE+BME</td>
                            <td>19:00</td>
                          </tr>
                          <tr>
                            <td>19 Jan</td>
                            <td className="mid_row">Mech+Arch+MCA vs IT+BT+CE+M.Tech</td>
                            <td>20:00</td>
                          </tr>
                          <tr>
                            <td>28 Jan</td>
                            <td className="mid_row">TBD Vs TBD</td>
                            <td>20:00</td>
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
                          <h1>18 jan----COURT 1</h1>
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
                            <td className="mid_row">IT+Biotech+Civil+Mtech vs Elex+CRIMSON LION</td>
                            <td>19:00</td>
                          </tr>
                          <tr>
                            <td>Doubles</td>
                            <td className="mid_row">IT+Biotech+Civil+Mtech vs Elex+CRIMSON LION</td>
                            <td>16:20</td>
                          </tr>
                          <tr>
                            <td>Singles</td>
                            <td className="mid_row">IT+Biotech+Civil+Mtech vs Elex+CRIMSON LION</td>
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
                            <td>18 JAN</td>
                            <td className="mid_row">
                            Mech+Archi+Mca vs Meta+Mining+Cse+Bme
                            </td>
                            <td>20:00</td>
                          </tr>
                          <tr>
                            <td>19 JAN</td>
                            <td className="mid_row">
                            Elex+CRIMSON LION vs Mech+Archi+Mca
                            </td>
                            <td>19:00</td>
                          </tr>
                          <tr>
                            <td>19 JAN</td>
                            <td className="mid_row">
                            Meta+Mining+Cse+Bme Vs IT+BT+Civil+MTech
                            </td>
                            <td>20:00</td>
                          </tr>
                          <tr>
                            <td>28 JAN</td>
                            <td className="mid_row">
                            Mech+Archi+Mca Vs IT+BT+CE+M.Tech
                            </td>
                            <td>19:00</td>
                          </tr>
                          <tr>
                            <td>28 JAN</td>
                            <td className="mid_row">
                            ECE+ChE+EE Vs Meta+Mining+Cse+Bme
                            </td>
                            <td>20:00</td>
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
                            <h1>18 jan----TABLE 1</h1>
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
                            <h1>18 jan----TABLE 2</h1>
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
                            <h1>19 jan----TABLE 1</h1>
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
                            <h1>19 jan----TABLE 2</h1>
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
        {/* <div data-aos="fade-up" className="home-toggle-button">
          <div className="flex justify-center items-center ">

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
        </div> */}
    </>
  )
}

// export default StarWrapper(Schedule,"about")
export default Schedule
