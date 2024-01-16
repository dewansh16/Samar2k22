import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../../styles";
import { teams } from "../../constants";
import {StarWrapper} from "../../hoc" ;
import { fadeIn, textVariant } from "../../utils/motion";

const TeamCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] pt-4 pb-2 px-6 min-h-[280px] flex justify-evenly items-center flex-col'
        // className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='Playing-teams'
          className='object-contain rounded-[15px]'
        />

        <h3 className='text-green-300 text-[20px] font-bold text-center pt-5 pb-3'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const OurTeams = () => {
      return (
    <>
    <div className="mt-20">
        <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} > <center>OUR TEAMS</center></h2>
      </motion.div>

      <div className="px-4 lg:px-20">
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 mx-auto text-secondary text-[17px] text-center'
      > 
          "Meet the heart and soul of Shaurya Club – our dynamic playing teams. Fueled by passion and commitment, our
           athletes embody the true spirit of sportsmanship. Join us on a journey where dedication meets excellence,
            showcasing the talent and unity that define our winning teams."
      </motion.p>

      </div>

      <div className='mt-20 flex flex-wrap gap-20 justify-center px-10'>
        {teams.map((team, index) => (
          <TeamCard key={team.title} index={index} {...team} />
        ))}
      </div>
      </div>
    </>
  )
}

// export default OurTeams
export default StarWrapper(OurTeams, "ourTeams");


// import { useContext, useEffect, useState } from "react";
// import "./home.component.css";

// import team1 from "../../Assets/Images/playing-teams/team1.jpg";
// import team2 from "../../Assets/Images/playing-teams/team2.jpg";
// import team3 from "../../Assets/Images/playing-teams/team3.jpg";
// import team4 from "../../Assets/Images/playing-teams/team4.jpg";
// import team5 from "../../Assets/Images/playing-teams/team5.jpg";
// import team6 from "../../Assets/Images/playing-teams/team6.jpg";
// import team7 from "../../Assets/Images/playing-teams/team7.jpg";
// import team8 from "../../Assets/Images/playing-teams/team8.jpg";
// import team9 from "../../Assets/Images/playing-teams/team9.jpg";


// const OurTeams = () => {

//   return (
//     <>
//         <div data-aos="fade-down" className="heading-our-team hidden sm:block"> 
//         {/* <div data-aos="fade-down" className="heading-our-team">  */}
//                 OUR TEAMS
//           </div>
          
//           {/* line 1  */}
//           <div class="hidden lg:flex flex-col lg:flex-row items-center justify-center p-20">
//           {/* <div class="flex flex-col lg:flex-row items-center justify-center p-20"> */}
//             <div data-aos="fade-right" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
//               <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
//               <div class="bg-white h-full flex-1 bg-opacity-50"></div>
//               <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

//                 <div className="team-image">
//                   <div
//                     style={{ backgroundImage: `url(${team1})` }}
//                     className="team-image-bg"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div  data-aos="zoom-in" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
//               <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
//               <div class="bg-white h-full flex-1 bg-opacity-50"></div>
//               <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

//                 <div className="team-image">
//                   <div
//                     style={{ backgroundImage: `url(${team2})` }}
//                     className="team-image-bg"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div data-aos="fade-left" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
//               <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
//               <div class="bg-white h-full flex-1 bg-opacity-50"></div>
//               <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

//                 <div className="team-image">
//                   <div
//                     style={{ backgroundImage: `url(${team3})` }}
//                     className="team-image-bg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//            {/* line 2  */}
//            <div class="hidden lg:flex flex-col lg:flex-row items-center justify-center p-20">
//           {/* <div class=" flex flex-col lg:flex-row items-center justify-center p-20"> */}
//             <div data-aos="fade-right" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
//               <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
//               <div class="bg-white h-full flex-1 bg-opacity-50"></div>
//               <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

//                 <div className="team-image">
//                   <div
//                     style={{ backgroundImage: `url(${team4})` }}
//                     className="team-image-bg"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div  data-aos="zoom-in" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
//               <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
//               <div class="bg-white h-full flex-1 bg-opacity-50"></div>
//               <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

//                 <div className="team-image">
//                   <div
//                     style={{ backgroundImage: `url(${team5})` }}
//                     className="team-image-bg"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div data-aos="fade-left" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
//               <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
//               <div class="bg-white h-full flex-1 bg-opacity-50"></div>
//               <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

//                 <div className="team-image">
//                   <div
//                     style={{ backgroundImage: `url(${team6})` }}
//                     className="team-image-bg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>


//            {/* line 3  */}
//            <div class="hidden lg:flex flex-col lg:flex-row items-center justify-center p-20">
//           {/* <div class=" flex flex-col lg:flex-row items-center justify-center p-20"> */}
//             <div data-aos="fade-right" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
//               <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
//               <div class="bg-white h-full flex-1 bg-opacity-50"></div>
//               <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

//                 <div className="team-image">
//                   <div
//                     style={{ backgroundImage: `url(${team7})` }}
//                     className="team-image-bg"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div data-aos="zoom-in" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
//               <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
//               <div class="bg-white h-full flex-1 bg-opacity-50"></div>
//               <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

//                 <div className="team-image">
//                   <div
//                     style={{ backgroundImage: `url(${team8})` }}
//                     className="team-image-bg"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div data-aos="fade-left" class="relative group flex flex-row justify-center mb-12 lg:mb-0 h-80 w-64 mx-5 transform transition duration-500 hover:scale-[1.1]">
//               <div class="bg-blue-400  h-full flex-1 bg-opacity-50"></div>
//               <div class="bg-white h-full flex-1 bg-opacity-50"></div>
//               <div class="my-6 mx-5 shadow-sm p-10 flex flex-col justify-center bg-white absolute inset-0 transform  group-hover:scale-[0.95] transition duration-300">

//                 <div className="team-image">
//                   <div
//                     style={{ backgroundImage: `url(${team9})` }}
//                     className="team-image-bg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//     </>
//   )
// }

// export default OurTeams