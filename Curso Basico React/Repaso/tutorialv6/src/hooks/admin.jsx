import { useState, useEffect } from "react";

const SESSION_DURATION = 3;

export const useSessionTime = () => {
    const [remainingTime, setRemainingTime] = useState(SESSION_DURATION);
    let timer = 0;
  
    useEffect(() => {
      timer = setInterval(
        () => {
          setRemainingTime(prevRemainingTime => {
            if (prevRemainingTime > 0) {
              return prevRemainingTime - 1;
            } else {
              clearInterval(timer);
              return 0;
            }
          });
        }, 1000);
        
      return ()=>{clearInterval(timer);} // Limpiar el intervalo al desmontar el componente
    }, []);
  
    return remainingTime;
  };