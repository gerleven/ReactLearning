import {Component, Fragment, useState} from 'react';

const Eventos = ({onCustomEvent, children}: any)=>
{
    const [textValue, setTextValue] = useState<string>("Hola!");

    const handleHover = ()=>{
        console.log("You hover me!")
        setTextValue("You hover me!\n");
    }
    const handleOut = ()=>{
        setTextValue("Hola!\n");
    }
    const handleClick= (number: number)=>{
        console.log("number: "+number)
        setTextValue(prev=>(prev+"number: "+number+"\n"));
    }
    const handleCustomEvent=()=>{
        onCustomEvent();
    }

    return <>
    <div onMouseOver={handleHover} onMouseOut={handleOut} className='componente'>
        <h6>Eventos:</h6>
        <button onClick={()=>handleClick(2)}>ClickMe</button>
        <p>{textValue}</p>
        <button onClick={handleCustomEvent}>Custom Event</button>
        {children}
    </div>
    </>
}
    
export default Eventos;