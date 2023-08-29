import React from 'react';

const Saludo = (prop) => {
    console.log(prop);
    return ( <div><h1>{prop.mensaje}</h1></div>);
}
 
export default Saludo;