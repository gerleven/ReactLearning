import PropTypes from "prop-types";

//Si NO usas Type Script:
Propiedades.defaultProps = {
  porDefecto: "Props: (Valor por defecto)", //Defalt Value
};

Propiedades.propTypes = {
  numero: PropTypes.number.isRequired, //as Required
  cadena: PropTypes.string, //Type
};

//Si usas Type Script:

interface PropInterface{
  porDefecto?: any;
  cadena?: string;
  numero?: number;
  booleano?: boolean;
  arreglo?: any[];
  objeto?: {curso?: string, donde?: string};
  funcion?: (a: any)=>any;
  elementoReact?: any;
  componenteReact?: any;
}

export default function Propiedades(props: PropInterface = {porDefecto: "valor por defecto"}) {
  
  return (
    <div className="componente">
      <h2>{props.porDefecto}:</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo?.join(", ")}</li>
        <li>{props.objeto?.curso + " - " + props.objeto?.donde}</li>
        <li>{props.arreglo?.map(props.funcion ?? ((a)=>(a))).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}
