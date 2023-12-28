import React from 'react'
import { useEffect, useState } from 'react';
import "./home.component.css";

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
        
        <div data-aos="fade-down" className="heading-countdown hidden sm:block"> 
           COUNTDOWN
          </div>

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

export default Countdown;