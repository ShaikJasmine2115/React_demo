import { useEffect , useRef } from 'react';

const TimerControls = ({toggleTimer, resetTimer, isRunning}) => {
    const startButtonRef = useRef(null);

    useEffect(()=>{
        if(startButtonRef.current){
            startButtonRef.current.focus();
        }
    }, []);
    return (
        <>
            <button ref = {startButtonRef} onClick={toggleTimer} className='mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600' >
                    {isRunning ? 'Pause' : 'Start'} 
            </button>
            <button onClick={resetTimer} className='ml-5 mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600' >
                    Reset
            </button>
        </>
    )
}

export default TimerControls;