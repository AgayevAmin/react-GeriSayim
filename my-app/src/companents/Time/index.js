import React, { useEffect, useState } from 'react';

export function Timer  ({ initialSeconds ,title  })  {
const [seconds, setSeconds] = useState(initialSeconds);

useEffect(() => {
    if (seconds <= 0) {
return;
}


const timer = setInterval(() => {
setSeconds((prevSeconds) => prevSeconds - 1);
}, 1000);


return () => clearInterval(timer);
}, [seconds]);


const formatTime = (timeInSeconds) => {
const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2,'0');
const seconds = (timeInSeconds % 60).toString().padStart(2,'0');
return `${minutes}:${seconds}`;
}

const handleRestart = () => {
    setSeconds(initialSeconds);
  };
return (
    <div>
    <h1>  {title} {formatTime(seconds)}</h1>
    {seconds <=0 && <button onClick={handleRestart} >Yeniden Basda</button>} 
    </div>
    );}
