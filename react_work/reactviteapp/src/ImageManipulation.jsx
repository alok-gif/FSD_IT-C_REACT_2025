import React, { useState } from 'react'
import t from './components/tshirt.png'

function ImageManipulation() {
    const [tHeight, settHeight] = useState(150);
    const [tWidth, setTWidth] = useState(200)
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    function setColor(){
        setRed(Math.random()* 255)
        setBlue(Math.random()*255)
        setGreen(Math.random()*255)
    }
    return (
        <div >Image Manipulation
        <div >
            <img src={t} height={tHeight} width={tWidth} border={2} solid-green alt="t" style={{backgroundColor:`rgb(${red},${blue},${green})`}}/>
        </div>
        <button onClick={()=>settHeight(tHeight+20)}>increase</button>
        <button onClick={() => setTWidth(tWidth - 50)}>decrease width</button>
        <button onClick={setColor}>change bg</button>
        </div>
    )
}

export default ImageManipulation
