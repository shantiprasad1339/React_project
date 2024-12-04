import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function Congrates() {
    const [timeLeft, setTimeLeft] = useState(86400); // 24 hours in seconds (24 * 60 * 60)

    useEffect(() => {
      // Check if a countdown start time exists in localStorage
      const savedStartTime = localStorage.getItem("countdownStartTime");
      const currentTime = Date.now();
  
      if (savedStartTime) {
        const elapsed = Math.floor((currentTime - savedStartTime) / 1000);
        const remainingTime = 86400 - elapsed;
        if (remainingTime > 0) {
          setTimeLeft(remainingTime);
        } else {
          setTimeLeft(0); // Timer has already expired
        }
      } else {
        // Save the current time as the start time
        localStorage.setItem("countdownStartTime", currentTime);
      }
  
      // Update the timer every second
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
      }, 1000);
  
      // Cleanup the interval on component unmount
      return () => clearInterval(timer);
    }, []);
  
    // Format time as HH:MM:SS
    const formatTime = (seconds) => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };
  
  return (
 <>
   <section className="congrates_area">
    <div className="container">
        <div className="row">
            <div className="col-xl-6 mx-auto">
                 <div className="congrates_inner">
                    <img src="https://img.freepik.com/free-vector/trophie_53876-25485.jpg?t=st=1733333975~exp=1733337575~hmac=28e0a0d4c2b5eb8566f9efdcf3101dda5e2e4357429fe7320a094786c0c97d60&w=740" alt="" />
                    <h5>🎉 Congratulations! 🎉</h5>
                    <p> You have successfully logged in. Welcome to our platform!</p>
      <h2 style={{ fontSize: "48px", margin: "20px 0" }}>{formatTime(timeLeft)}</h2>
      {timeLeft === 0 && <p style={{ color: "red", fontSize: "18px" }}>Time is up! The countdown has ended.</p>}
      <h6>500 free Followers Created</h6>

                 </div>
            </div>
        </div>
    </div>
   </section>
 </>
  )
}

export default Congrates
