import React from 'react';
import { useState } from 'react';   

function StateHandling() {
    let [counter, setCounter] = useState(20);
    function increaseValue(){
        setCounter(counter+1);
    }
    
    return (
        <div>StateHandling
            <h2>counter value = {counter}</h2>
            <button onClick={counter<10?increaseValue:null}>Increase Value</button>
            <button onClick={()=>counter>0?setCounter(counter-1):null}>Decrease Value</button>
        </div>
      
    )
}

export default StateHandling
