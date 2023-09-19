import { useEffect, useState } from "react";

// La logica con estado que quiero implementar con useFormInput:
// Guardar como estado el valor actual del input
// Que la logica se encarga de detectar el onChange y modifique el valor del input y retorne un objeto con ese value y ese onChange para pasarselo al <input>
export default function useFormInput(){
    const [value, setValue] = useState();

    const handleOnValueChange=(e)=>{
        setValue(e.target.value);
    }

    const inputProps = {
        value: value,
        onChange: handleOnValueChange,
    }

    return inputProps;
}