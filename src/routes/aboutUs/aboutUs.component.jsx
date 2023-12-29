import { useEffect } from "react";
import "./aboutUs.css";
import "./aboutUs.component.css";
import chess from "../../Assets/Images/SHAURYA LOGO (1).png";
import chess1 from "../../Assets/Images/samar_logo.png";
function AboutUs() {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="about-us-container">
      <h3 id="about-us-wrapper"> <span className="aboutus_title" id="about-us-text-span">About us</span> </h3>
      {/* <p className="head-text">ABOUT US</p> */}
      <p className="samar">samar</p>
      <div className="Block1">
        <div className="aboutus_first">
        <div className="aboutus_first1">
                  <div className="aboutus_data1">
                  <p>
                    SAMAR is the Annual College Sports Festival of NIT Raipur being
                    organised by "SHAURYA" The Sports Committee of NIT Raipur. It is a
                    four day event held in the month of January or February in which
                    students from various colleges accoross Chhattisgarh come forward to
                    participate into. Over the years SAMAR has evolved and expanded to
                    become the best sports extravanza. One experiences the 4 days of
                    awesomeness here. Being the most awaited event of the year, it is a
                    platform where youths get together and showcase their talents and
                    sportsmanship. So come, join and rejoice the awesomeness of Samar!!
                    NITRR sports boasts of a rich culture, thriving immense
                    participation. Samar was one of the best experiences at NITRR and
                    has a rich string of memories linked with it. Samar brings with it a
                    great opportunity to show your endeavour along with fun and
                    enjoyment. <br />
                    As continuing from the last 10 years, SAMAR 2K22 will accomodate
                    students, rather sportspersons from all over Chhattisgarh. In Toto,
                    so many games, both indoor and outdoor, are going to be organized,
                    chess, badminton, volleyball to name some. Every match will be
                    accompained by a huge audience to encourage the players. It is going
                    to be piethora of zest and enthusiasm. Awards and prizes are eagerly
                    waiting to be handed over to the deserved players. So tie your shoe
                    laces and put on your sweat bands. NIT Raipur invites you to
                    participate in this grand fest and enjoy the thrill and titillation
                    in sports in a way done never before.
                  </p>
                  </div>
                  <div className="aboutus_image1">
                    <img src={chess1} alt="Chess" />
                    <span className="circle-spin"></span>

                  </div>
        </div>
       </div>
      </div>
      <p className="samar">shaurya</p>
    <div className="Block1">
    <div className="aboutus_second">
                    <div className="aboutus_image1" id="second_shaurya">
                          <img src={chess} alt="Chess" />
                          <span className="circle-spin"></span>
                    </div>
                    <div className="aboutus_data1">

                    <p>
                      Apart from educational knowledge institute promotes lot of other
                      activities and ideas in order to overall development of its students.
                      Team SHAURYA provides such a platform to its students interested in
                      sports where they are provided with the best equipment and training.
                      <br />
                      Presents to you the most awaited sports fest of Central India, SAMAR
                      2k22. With tons of enthusiasm and pounds of thrilling experiences, with
                      hundreds of winners and thousands of learners, with sports ranging from
                      mind-wrenching chess to breath taking athletics we bring you a platform
                      to expose your hidden sportsperson and let it take over you at this
                      mind-blowing fest in from of an incredible audience.
                    </p>
                    </div>

      </div>
    </div>
    </div>

  );
}
export default AboutUs;