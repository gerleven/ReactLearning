import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

interface Person {
  name: string;
  job: {
    company: string;
  };
}

const Hooks = () => {
  /*Variables de estado*/

  //useState con TypeScript
  const [value, setValue] = useState<number>(0);
  const [persona, setPersona] = useState<Person>({
    name: "german",
    job: { company: "Microsoft" },
  });
  const [dias, setDias] = useState<string[]>(["Lunes", "Martes"]);

  /*Handles*/
  const handleClick = () => {

    //setVariableEstado con (prev)=>([...prev], new)
    setValue((prevValue) => prevValue + 1); //Forma correcta
    // setValue( value + 1); //ese value podria esta desactualizado
    setPersona(
      (prevPersona: Person) => ({ ...prevPersona, name: "joaquin" } as Person)
    );
    setDias((prevDias) => [...prevDias, "Miercoles"]);
  };

  /*Efectos*/
  useEffect(() => {
    console.log("Efecto 1");
    console.log(value);
    console.log(persona);
    console.log(dias);
  });

  //Sañiamieno en useEffect
  useEffect(() => {
    console.log("Eefcto 2");
    const handleKeyListener = (e: KeyboardEvent) => {
      console.log(e.code);
    };

    window.addEventListener("keydown", handleKeyListener);

    const saniamiento = () => {
      console.log("listener deleted");
      window.removeEventListener("keydown", handleKeyListener);
    };
    return saniamiento;
  }, []);

  return (
    <>
      <h2>Hooks</h2>
      <p>Actual Value: {value}</p>
      <button onClick={handleClick}>Value++</button>
      <NavLink to="/">Back</NavLink>
    </>
  );
};

export default Hooks;
