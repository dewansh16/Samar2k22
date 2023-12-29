import React from 'react'
import { useEffect, useState } from 'react';
import "./home.component.css";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import {StarWrapper} from "../../hoc" ;

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
                <center> "Get ready to witness the thrill and excitement of Samar - the ultimate sports fest! The countdown is on!"</center>
              </motion.p>

            </div>
          {/* </div> */}


        {/* <div className="count-down"> */}
        <div className="count-down hidden sm:flex">
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
    </>
  )
}

export default StarWrapper(Countdown,"countdown");