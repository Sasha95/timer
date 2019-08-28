import React from 'react';
import {Clock} from './Clock'
import {useNewTimer} from './UseNewTimer'

function App() {
const timer = useNewTimer(new Date());
  return (
    <div >
     <Clock />
     <h1>{timer.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
