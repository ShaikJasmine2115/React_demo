import { useState } from 'react'
import LifeCycleLogger from './components/LifeCycleLogger';

function App() {
  const [showLogger, setShowLogger] = useState(false)

  return (
    <div className='container'>
      <h2>React Lifecycle Playground</h2>
      <button className='primary-btn' onClick={()=> setShowLogger(!showLogger)}> 
        {showLogger ? 'Unmount Logger' : 'Mount Logger'}
      </button>
      {showLogger && <LifeCycleLogger />}
    </div>
  )
}

export default App;
