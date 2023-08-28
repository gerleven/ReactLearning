import './App.css';
import { Component, Fragment, useState } from 'react';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [editMode, setEditMode] = useState<boolean|string>("hola");
  return (
    <>
    {/*Operador &&*/}
    {loading && <Loader />}
    
    {/*Operador Ternario*/}
    {editMode ? <EditForm /> : <ViewForm />}

    {/* Uso de if else dentro de una arrow function*/}
    {
      ()=>{
        if(editMode==true){<EditForm/>}
        else {<ViewForm/>}
      }
    }

    {/* Uso de switch dentro del método render() */}
    {(() => {
        switch (editMode) {
          case true:
            return <EditForm />;
          case false:
            return <ViewForm />;
          default:
            return <span>Error!</span>;
        }
      })()}
    </>
  );
}

export default App;

const EditForm = ()=>(
  <div>Edit Form</div>
);

const ViewForm = ()=>(
  <div>View Form</div>
);
const Loader = ()=>(
  <div>Loading...</div>
);