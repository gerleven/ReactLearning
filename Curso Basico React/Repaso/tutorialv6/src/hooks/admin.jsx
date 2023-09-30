import { useSubmit, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const SESSION_DURATION = 3;

export function useSessionTime(){
    const [remainingTime, setRemainingTime] = useState(SESSION_DURATION);
    let timer;

    useEffect(()=>{
        timer = setInterval(()=>{
            setRemainingTime(prev=>prev-1);
        }, 1000);
        return ()=>clearInterval(timer)
      },[]);


    useEffect(()=>{
        console.log("Timer change");
        
        if(remainingTime === 0){
            console.log("Time Out!")
            clearInterval(timer);
        }
      },[remainingTime]);
    
    return remainingTime;

}







export const useSessionTime2 = () => {
    const [remainingTime, setRemainingTime] = useState(SESSION_DURATION);
    let timer;
  
    const stopTimer = () => {
        console.log("2)### limpiar timer "+timer)
      clearInterval(timer);
    };
  
    useEffect(() => {
      timer = setInterval(() => {
        console.log("2)### Funcion interna del setInterval - "+timer);
        setRemainingTime(prevRemainingTime => {
          if (prevRemainingTime > 0) {
            return prevRemainingTime - 1;
          } else {
            stopTimer(); // Limpiar el intervalo cuando el tiempo se agota
            console.log('2)### ¡Tiempo agotado!');
            return 0;
          }
        });
      }, 1000);
  
      return stopTimer; // Limpiar el intervalo al desmontar el componente
    }, []);
  
    return remainingTime;
  };

export const useSessionTime3 = () => {
  const [remainingTime, setRemainingTime] = useState(SESSION_DURATION);
  let timer; // Declaramos timer en el ámbito superior

  const stopTimer = () => {
    console.log("3)### limpiar timer "+timer)
    clearInterval(timer);
  };

  // Primer useEffect para restar 1 segundo
  useEffect(() => {
    timer = setInterval(() => {
        console.log("3)### Funcion interna del setInterval - "+timer);
      setRemainingTime(prevRemainingTime => {
        if (prevRemainingTime > 0) {
          return prevRemainingTime - 1;
        }
        return prevRemainingTime;
      });
    }, 1000);

    return () => clearInterval(timer); // Limpiar el intervalo al desmontar el componente
  }, []);

  // Segundo useEffect para comprobar si el tiempo se ha agotado
  useEffect(() => {
    if (remainingTime === 0) {
      console.log('3)### ¡Tiempo agotado!'+timer);
      stopTimer(); // Limpia el intervalo cuando el tiempo se agota
    }
  }, [remainingTime]);

  return remainingTime;
  };