import { useContext, useEffect, useState } from "react";
import "./home.component.css";

import team1 from "../../Assets/Images/playing-teams/team1.jpg";
import team2 from "../../Assets/Images/playing-teams/team2.jpg";
import team3 from "../../Assets/Images/playing-teams/team3.jpg";
import team4 from "../../Assets/Images/playing-teams/team4.jpg";
import team5 from "../../Assets/Images/playing-teams/team5.jpg";
import team6 from "../../Assets/Images/playing-teams/team6.jpg";
import team7 from "../../Assets/Images/playing-teams/team7.jpg";
import team8 from "../../Assets/Images/playing-teams/team8.jpg";
import team9 from "../../Assets/Images/playing-teams/team9.jpg";


const OurTeams = () => {

  return (
    <>
        <div data-aos="fade-down" className="heading-our-team hidden sm:block"> 
        {/* <div data-aos="fade-down" className="heading-our-team">  */}
                OUR TEAMS
          </div>
          
          {/* line 1  */}
          <div class="hidden lg:flex flex-col lg:flex-row items-center justify-center p-20">
          {/* <div class="flex flex-col lg:flex-row items-center justify-center p-20"> */}
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
           <div class="hidden lg:flex flex-col lg:flex-row items-center justify-center p-20">
          {/* <div class=" flex flex-col lg:flex-row items-center justify-center p-20"> */}
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
           <div class="hidden lg:flex flex-col lg:flex-row items-center justify-center p-20">
          {/* <div class=" flex flex-col lg:flex-row items-center justify-center p-20"> */}
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

    </>
  )
}

export default OurTeams