import React, {useState} from 'react'
import './ColorPicker.css'



export default function ColorPicker() { 
    const [red, setRed] = useState(55);
    const [green, setGreen] = useState(55);
    const [blue, setBlue] = useState(55);
    const [alpha, setAlpha] = useState(1);


    const changeValue = (event, selector)=>{
        switch (selector) {
            case "red":
                setRed(event.target.value);
                break;
            case "green":
                setGreen(event.target.value);
                break;
            case "blue":
                setBlue(event.target.value);
                break;
            case "alpha":
                setAlpha(event.target.value);
                break;
            default:
                break;
        }
    }

    const random = ()=>{
        setRed(Math.floor(Math.random() * 255))
        setGreen(Math.floor(Math.random() * 255))
        setBlue(Math.floor(Math.random() * 255))
        setAlpha(1)
    }

    const convertRGBAtoHex = ()=>{
        
    }

    return (
        <div className='select-color'>
            <div className='color' style={{backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`}}></div>
            <p>Red: </p>
            <input type="range" value={red} min="0" max="255" defaultValue="55" className="slider" id="red" onChange={(e) => changeValue(e, "red")}></input>
            <p>Green: </p>
            <input type="range" value={green} min="0" max="255" defaultValue="55" className="slider" id="green" onChange={(e) => changeValue(e, "green")}></input>
            <p>Blue: </p>
            <input type="range" value={blue} min="0" max="255" defaultValue="55" className="slider" id="blue" onChange={(e) => changeValue(e, "blue")}></input>
            <p>Alpha: </p>
            <input type="range" min="0" max="1" defaultValue="1" className="slider" id="alpha" step={.01} onChange={(e) => changeValue(e, "alpha")}></input>

            <p>RGBA VALUE: {`${red}, ${green}, ${blue}, ${alpha}`}</p>

            <button onClick={random}>Generate Random Color</button>
        </div>
    )
}
