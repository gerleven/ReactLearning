import { useEffect, useState } from "react";

// La lagica con estado que quiero implementar en este estado:
// Quiero tener un estado que sea true o false segun si estas conectado a internet
// Quiero que se escuche el evento online y offline y segun eso se modifique el estado
export default function useOnlineStatus(){
    const [isOnline, setIsOnline] = useState(true);
    useEffect(()=>{
        
        const handleOnline=()=>{
            console.log("Online!");
            setIsOnline(true);
        }
        window.addEventListener('online', handleOnline);

        const handleOffline=()=>{
            console.log("Offline!");
            setIsOnline(false);
        }
        window.addEventListener('offline', handleOffline);
        

        const dummyFunction=()=>{console.log("dummyFunction");}
        window.addEventListener('online', dummyFunction);
        window.addEventListener('offline', dummyFunction);
        // Nota: el addEventListener recien como argumento un evento y una funcion handle a ejecutar cuando ese evento se reciba
        // A un mismo evento (por ejemplo el evento online) se pueden agregar varios listener y cada uno podria tener un handler distinto
        // Es por eso que el removeEventListener necesita como parametro ademas del evento tambien la funcion hadle

        return ()=>{
            console.log("Sañamiento!");
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            // En este caso estamos removiendo todos los Listener menos el ('online', dummyFunction) y el ('offline', dummyFunction), por lo tanto aunque desmontemos el componente useOnlieStatus y se ejecute esta funcion de sañiamiento esos dos listeners van a seguir ejecutando la funcion handle dummyFunction
        }
    },[]); //Agregamos el [] porque si no estariamos seteando los Listeners cada vez que cambie la variable de estado isOnline, con hacerlo una sola vez alcanza porque despues ya quedan los listeners escuchando

    return isOnline;
}