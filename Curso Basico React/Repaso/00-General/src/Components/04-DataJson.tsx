import {Component, Fragment} from 'react';
import data from "./data.json"

const DataJSON = ({mensaje}:any)=>
{
    return <>
    <h6>TV SHOWS:</h6>
        {data.map((tvShow)=>(
            <div className='componente'>
                Show Name: {tvShow.show.name}
            </div>
        ))}
    </>
}
    
export default DataJSON;