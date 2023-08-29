//import PropTypes from "prop-types";

interface PropInterface{
porDefecto?: any;
cadena?: any;
numero?: any;
booleano?: any;
arreglo?: any;
objeto?: any;
funcion?: any;
elementoReact?: any;
componenteReact?: any;

}

export default function Propiedades(props: PropInterface = {porDefecto: "valor por defecto"}) {
  return (
    <div>
      <h2>{props.porDefecto}:</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.curso + " - " + props.objeto.donde}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

// Propiedades.defaultProps = {
//   porDefecto: "Props: (Valor por defecto)", //Defalt Value
// };

// Propiedades.propTypes = {
//   numero: PropTypes.number.isRequired, //as Required
//   cadena: PropTypes.string, //Type
// };
