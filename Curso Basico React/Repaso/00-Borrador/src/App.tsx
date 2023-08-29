import './App.css';
import { Component, Fragment, useState } from 'react';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [editMode, setEditMode] = useState<boolean|string>("hola");
  return (
    <>
    <div className='componente animate__animated animate__infinite animate__pulse'>Hola</div>
    
    {loading && <Loader />}
      
    {editMode ? <EditForm /> : <ViewForm />}

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