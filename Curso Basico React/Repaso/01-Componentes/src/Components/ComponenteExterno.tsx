interface PropsComponenteFuncional{
  mensaje?: string,
}

//Componente Funcional
function ComponenteExterno({mensaje="mensaje por defecto"}:PropsComponenteFuncional){
  return <p><span><b>Componente Funcional Externo: </b>{mensaje}</span></p>
}

export default ComponenteExterno;