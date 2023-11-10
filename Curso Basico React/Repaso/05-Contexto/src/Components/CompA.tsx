import {useContext} from 'react';
import {MyGlobalContext} from "../Contexto/useGlobalContext";
import CompB from "./ComB"
import "../App.css"

const CompA = ()=>{
    const {contador, incrementar} = useContext(MyGlobalContext);
    return <>
        <div className="componente">
            <h5>Componente A externo</h5>
            <p>contador: {contador}</p>
            <button onClick={()=>{incrementar()}}> Incrementar interno</button>
            <CompB></CompB>
        </div>
    </>
}
export default CompA;