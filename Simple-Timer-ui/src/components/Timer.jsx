import {useState, useRef, useEffect} from 'react';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';

const Timer = () => {

  const timerRef = useRef(null);
  const [time, setTime] = useState(()=>{
    return Number(localStorage.getItem(' Time ') || 0)});
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    localStorage.setItem(' Time ', time);
  },[time]);

  const toggleTimer = () =>{
    if (isRunning){
      clearInterval(timerRef.current)
      timerRef.current = null;

    }else {
      timerRef.current =setInterval(()=>{
        setTime((prevTime) => prevTime + 1)
      },1000)
    }
    setIsRunning(!isRunning);
  }

  const resetTimer =() => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setIsRunning(false);
    setTime(0);
    localStorage.removeItem(' Time ');
  }

  return (
    <div >
      <TimerDisplay time={time} />
      <TimerControls toggleTimer={toggleTimer} resetTimer={resetTimer} isRunning={isRunning} />
    </div>
  )
}

export default Timer;