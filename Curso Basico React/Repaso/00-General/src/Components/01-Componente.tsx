import {Component, Fragment} from 'react';

const Componente = ({mensaje}:any)=>
    <>
        <div>Usando funcion en una variable const con arrow function:</div>
        <div>{mensaje}</div>
    </>
export default Componente;

// /*Componente de clase*/
// export default class Componente extends Component {
//     render() { 
//         return (
//             <>
//                 <div>Hola desde el componente!</div>
//                 <div>{this.props.mensaje}</div>
//             </>
//         );
//     }
// }

/*Componente funcional con props*/
// export default function Componente(props){
//     return(
//         <>
//             <div>Usando componente funcional:</div>
//             <div>{props.mensaje}</div>
//         </>
//     );
// }

// // /*Componente funcional con destructuracion*/
// export default function Componente({mensaje}){
//     return(
//         <>
//             <div>Usando componente funcional y destructuracion:</div>
//             <div>{mensaje}</div>
//         </>
//     );
// }

/*funcion en una variable*/
// const Componente = function({mensaje}){
//     return(
//         <>
//             <div>Usando funcion en una variable const:</div>
//             <div>{mensaje}</div>
//         </>
//     );
// }
// export default Componente;


/*Como arrow functions:*/
// const Componente = ({mensaje}) => <><div>Usando funcion en una variable const con arrow function:</div><div>{mensaje}</div></>
// export default Componente;

// const Componente = ({mensaje}) => {return(<><div>Usando funcion en una variable const con arrow function:</div><div>{mensaje}</div></>)} //()=>() o ()=>{return()}, si agregar las {} despues de => el return no se puede omitir
// export default Componente;

// const Componente = ({mensaje})=>
//     <>
//         <div>Usando funcion en una variable const con arrow function:</div>
//         <div>{mensaje}</div>
//     </>
// export default Componente;