import { useState, useEffect } from "react";


const LifeCycleLogger = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('Component mounted');

        return ()=> {
            console.log('Component will unmount');
        }
    }, [])

    useEffect(()=>{
        if (count>0 ){
           console. log('Count updated to:', count);
        }
    }, [count])

    const incrementCount = () => {
        setCount((prevCount)=> prevCount + 1)
    }

    return (
        <div className="logger-container">
            <h2> Lifecycle Logger</h2>
            <p>Count: {count}</p>
            <button onClick={incrementCount} className="secondary-btn">Update</button>
        </div>
    )
}

export default LifeCycleLogger;