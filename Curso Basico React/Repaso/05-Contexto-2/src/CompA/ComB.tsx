import {useContext} from 'react';
import {MyContext} from "../App";

const CompB = ()=>{
    const {contador, duplicar, reset} = useContext(MyContext);
    return <>
        <div className='componente'>
            <h5>Componente B externo</h5>
            <p>contador: {contador}</p>
            <button onClick={()=>{duplicar()}}> Duplicar</button>
            <button onClick={()=>{reset()}}> Reset</button>
        </div>
    </>
}

export default CompB;