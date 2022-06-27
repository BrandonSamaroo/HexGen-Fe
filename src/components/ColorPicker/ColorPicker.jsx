import React, {useState, useEffect} from 'react'
import './ColorPicker.css'



export default function ColorPicker() { 
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(55);
    const [blue, setBlue] = useState(55);
    const [alpha, setAlpha] = useState(1);

    const [redHex, setRedHex] = useState("");
    const [greenHex, setGreenHex] = useState("");
    const [blueHex, setBlueHex] = useState("");
    const [alphaHex, setAlphaHex] = useState("");

    const [history, setHistory] = useState([]);

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
        setRedHex(("0"+(Number(red).toString(16))).slice(-2).toUpperCase())
        setGreenHex(("0"+(Number(green).toString(16))).slice(-2).toUpperCase())
        setBlueHex(("0"+(Number(blue).toString(16))).slice(-2).toUpperCase())
        setAlphaHex(Math.floor(alpha*100).toString())
    }


    useEffect(() => {
        convertRGBAtoHex();
      });

    const updateHex =(event)=>{
        event.preventDefault()
        setRed(parseInt(event.target[0].value.substring(0,2), 16))
        setGreen(parseInt(event.target[0].value.substring(2,4), 16))
        setBlue(parseInt(event.target[0].value.substring(4,6), 16))
    }

    const save = ()=>{
        setHistory([...history,`rgba(${red},${green},${blue},${alpha})`])
    }


    const loadSave = (item)=>{
        const list = item.split(',').map(element => {
            return element.replace(/[^0-9\.]+/g,'');
        });
        setRed(list[0])
        setGreen(list[1])
        setBlue(list[2])
        setAlpha(list[3])
    }

    return (
        <div className='select-color'>
            <div className='color' style={{backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`}}></div>
            <form onSubmit={updateHex}>       
                <label>
                    Hex:
                    <input type="text" defaultValue={`${redHex}${greenHex}${blueHex}`}  className="hex"/>        
                </label>
                <input type="submit" value="Submit" />
            </form>
            <p>Red: </p>
            <input type="range" value={red} min="0" max="255" className="slider" id="red" onChange={(e) => changeValue(e, "red")}></input>
            <p>Green: </p>
            <input type="range" value={green} min="0" max="255" className="slider" id="green" onChange={(e) => changeValue(e, "green")}></input>
            <p>Blue: </p>
            <input type="range" value={blue} min="0" max="255"className="slider" id="blue" onChange={(e) => changeValue(e, "blue")}></input>
            <p>Alpha: </p>
            <input type="range" value={alpha} min="0" max="1" className="slider" id="alpha" step={.01} onChange={(e) => changeValue(e, "alpha")}></input>

            <p>RGBA VALUE: {`R ${red}, G ${green}, B ${blue}, A ${alpha}`}</p>
            <p>HEX VALUE: {`${redHex}${greenHex}${blueHex} OPACITY-%${alphaHex}`}</p>

            <button onClick={random}>Generate Random Color</button>
            <button onClick={save}>Save this Color</button>

            <ul>
                {history.map((item,index)=>{

                    return <button key={index} style={{backgroundColor: `${item}`}} onClick={()=>loadSave(item)}>{item}</button>

                })}
            </ul>
        </div>
    )
}
