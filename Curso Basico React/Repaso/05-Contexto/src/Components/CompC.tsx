import {useContext} from 'react';
import {MyGlobalContext} from "../Contexto/useGlobalContext";
import "../App.css"

const CompC = ()=>{
    const {contador, incrementar, duplicar, triplicar, reset} = useContext(MyGlobalContext);
    return <>
        <div className="componente">
            <h5>Componente C externo</h5>
            <p>contador: {contador}</p>
            <button onClick={()=>{incrementar()}}> Incrementar interno</button><span>-</span>
            <button onClick={()=>{duplicar()}}> Duplicar</button><span>-</span>
            <button onClick={()=>{triplicar()}}> Triplicar</button><span>-</span>
            <button onClick={()=>{reset()}}> Reset</button>
        </div>
    </>
}
export default CompC;