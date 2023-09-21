import {useEffect} from "react";
export default function useEventHandler(url: string, item: string, onShowNotification: Function){
    useEffect(()=>{
        fetch(url+item).then(
            (reponse)=>reponse.json(),
            (error)=>{alert("Error fetching item: "+error)}
        ).then(
            //Esta funcion es pasada por props como Event Handler y es definida por le componente padre
            (data)=>{onShowNotification(`The API to retrive '${item}' is working!`);}
        );
    },[item, onShowNotification]);
}