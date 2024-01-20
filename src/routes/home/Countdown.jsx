import React from 'react'
import { useEffect, useState } from 'react';
import "./home.component.css";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import {StarWrapper} from "../../hoc" ;
import { services } from "../../constants";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon }) => (
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
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='Playing-teams'
          className='object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Countdown = () => {
    let date = new Date();
    const [seconds, setSeconds] = useState(date.getSeconds());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [hours, setHours] = useState(date.getHours());
    const [days, setDays] = useState(date.getDate());

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


  return (
        <>
        
        {/* <div data-aos="fade-down" className="heading-countdown hidden sm:block">  */}
        <div data-aos="fade-down" className="heading-countdown text-[30px] lg:text-[60px]"> 
          <center> COUNTDOWN </center>
          </div>
        {/* <div data-aos="fade-down" className="countdown-text hidden sm:block">
          <center> Samar is more than an event; it's an experience!  </center>
          <center> "Get ready to witness the thrill and excitement of Samar - the ultimate sports fest! The countdown is on!"</center>
          </div>  */}

           {/* <div className="mt-20"> */}
           {/* <motion.div variants={textVariant()}>
              <h2 className={styles.sectionHeadText}> <center>COUNTDOWN</center></h2>
            </motion.div> */}

            <div className="px-4 lg:px-20 pb-20">
            {/* <div className="px-4 lg:px-20 pb-20 hidden sm:block"> */}
              <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-4 mx-auto text-secondary text-[17px] text-center'
              > 
                <center> "Samar is more than an event; it's an experience!"  </center>
                <center> "Get ready to witness the thrill and excitement of Samar - the ultimate sports fest!"</center>
                <center><b> "The countdown is on!"</b></center>
              </motion.p>

            </div>
          {/* </div> */}


        {/* <div className="count-down"> */}
        {/* <div className="count-down hidden sm:flex">
          <div data-aos="fade-right" className="count-down-div">
            <p className="count-div-item-1 heading-time">{days<10 ? "0"+days : days}</p>
            <p className="heading-DaysHMS">Days</p>
          </div>  
          <div data-aos="zoom-out" className="count-down-div">
            <p className="count-div-item-1 heading-time">{hours<10 ? "0"+hours : hours}</p>
            <p className="heading-DaysHMS">Hours</p>
          </div>  
          <div data-aos="zoom-out" className="count-down-div">
            <p className="count-div-item-1 heading-time">{minutes<10 ? "0"+minutes : minutes}</p>
            <p className="heading-DaysHMS">Minutes</p>
          </div>  
          <div data-aos="fade-left" className="count-down-div">
            <p className="count-div-item-1 heading-time">{seconds<10 ? "0"+seconds : seconds}</p>
            <p className="heading-DaysHMS">Seconds</p>
          </div>  
        </div>

         <div className='mt-20 flex flex-wrap gap-20 justify-center'>
        {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))} 
        </div>*/}



        <div className='mt-10 flex flex-wrap gap-10 lg:gap-2 justify-center items-center px-5'>
        
          
         
          <Tilt className='flex justify-center items-center'>
            <motion.div
              variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
              className='green-pink-gradient p-[1px] rounded-[20px] justify-center items-center h-20 lg:h-40'
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col h-20 w-20 lg:h-40 lg:w-40'
                // className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col h-40 w-40'
              >

                <h3 className='text-white text-[4vh] lg:text-[8vh] font-bold text-center'>
                  {/* {days} */}
                  0
                </h3>
                <h3 className='text-white text-[1.5vh] lg:text-[2.5vh] font-bold text-center'>
                  Days
                </h3>
              </div>
            </motion.div>
          </Tilt>
          <Tilt className='flex justify-center items-center'>
            <motion.div
              variants={fadeIn("right", "spring", 2 * 0.5, 0.75)}
              className='green-pink-gradient p-[1px] rounded-[20px] justify-center items-center h-20 lg:h-40'
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col h-20 w-20 lg:h-40 lg:w-40'
                // className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col h-40 w-40'
              >

                <h3 className='text-white text-[4vh] lg:text-[8vh] font-bold text-center'>
                  {/* {hours} */}
                  0
                </h3>
                <h3 className='text-white text-[1.5vh] lg:text-[2.5vh] font-bold text-center'>
                  Hours
                </h3>
              </div>
            </motion.div>
          </Tilt>
          <Tilt className='flex justify-center items-center'>
            <motion.div
              variants={fadeIn("right", "spring", 3 * 0.5, 0.75)}
              className='green-pink-gradient p-[1px] rounded-[20px] justify-center items-center h-20 lg:h-40'
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col h-20 w-20 lg:h-40 lg:w-40'
                // className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col h-40 w-40'
              >

                <h3 className='text-white text-[4vh] lg:text-[8vh] font-bold text-center'>
                  {/* {minutes} */}
                  0
                </h3>
                <h3 className='text-white text-[1.5vh] lg:text-[2.5vh] font-bold text-center'>
                  Minutes
                </h3>
              </div>
            </motion.div>
          </Tilt>
          <Tilt className='flex justify-center items-center'>
            <motion.div
              variants={fadeIn("right", "spring", 4 * 0.5, 0.75)}
              className='green-pink-gradient p-[1px] rounded-[20px] justify-center items-center h-20 lg:h-40'
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col h-20 w-20 lg:h-40 lg:w-40'
                // className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col h-40 w-40'
              >

                <h3 className='text-white text-[4vh] lg:text-[8vh] font-bold text-center'>
                  {/* {seconds} */}
                  0
                </h3>
                <h3 className='text-white text-[1.5vh] lg:text-[2.5vh] font-bold text-center'>
                  Seconds
                </h3>
              </div>
            </motion.div>
          </Tilt>
          
      </div>
    </>
  )
}

export default StarWrapper(Countdown,"countdown");