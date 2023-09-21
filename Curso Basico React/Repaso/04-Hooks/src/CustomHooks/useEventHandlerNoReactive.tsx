import {useEffect } from "react"; //useEffectEvent todavia no esta disponible en React, lo incorporaran mas adelante.
// import {useEffectEvent } from "react"; //useEffectEvent todavia no esta disponible en React, lo incorporaran mas adelante.

// function useEffectEvent(a:any){return a} //Todavia no implementado en React

// export function useEventHandlerEffectEvent(url: string, item: string, onShowNotification: any){
    
//     const noReactiveShowNotification = useEffectEvent(onShowNotification);

//     useEffect(()=>{
//         fetch(url+item).then(
//             (reponse)=>reponse.json(),
//             (error)=>{alert("Error fetching item: "+error)}
//         ).then(
//             //Esta funcion es pasada por props como Event Handler y es definida por le componente padre
//             (data)=>{noReactiveShowNotification(`The API to retrive '${item}' is working!`);}
//         );
//     },[item]); //Ya no tenemos a onShowNotification en las dependencias
// }




export default function useEventHandlerNoReactive(url: string, item: string, onShowNotification: Function){

    console.log("Hook ejecutado [useEventHandlerNoReactive]");
    
    useEffect(()=>{
        console.log("Efecto Sincronizado [useEventHandlerNoReactive]");
        fetch(url+item).then(
            (reponse)=>reponse.json(),
            (error)=>{alert("Error fetching item: "+error)}
        ).then(
            //Esta funcion es pasada por props como Event Handler y es definida por le componente padre
            (data)=>{onShowNotification(`The API to retrive '${item}' is working!`);}
        );
    },[item]);
}