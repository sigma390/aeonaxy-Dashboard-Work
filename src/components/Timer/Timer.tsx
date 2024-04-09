import { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(300); // Initial time in seconds (5 minutes)
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1; // Decrement time by 1 second
        } else {
          clearInterval(intervalId); // Clear interval when time reaches 0
          return 0;
        }
      });
    }, 1000); // Refresh the timer every second

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Format time to display minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div >
      <h1 className='text-[#d98b96] font-bold text-xl'>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
    </div>
  );
};

export default Timer;
