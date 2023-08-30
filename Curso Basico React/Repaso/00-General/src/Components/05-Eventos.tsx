import {Component, Fragment, useState} from 'react';

const Eventos = ()=>
{
    const [textValue, setTextValue] = useState<string>("Hola!");

    const handleClick = ()=>{
        console.log("You clecled me!")
        setTextValue("You clecled me!\n");
        
    }
    const handleClick2= (number: number)=>{
        console.log("number: "+number)
        setTextValue(prev=>(prev+"number: "+number+"\n"));
    }

    return <>
    <h6>Eventos:</h6>
    <button onClick={handleClick}>ClickMe</button>
    <button onClick={()=>(handleClick2(2))}>Add a 2</button>
    <p>{textValue}</p>
    </>
}
    
export default Eventos;