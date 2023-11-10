import {useContext} from 'react';
import {MyContext} from "../App";
import CompB from "./ComB"
import "../App.css"

const CompA = ()=>{
    const {contador, incrementar} = useContext(MyContext);
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