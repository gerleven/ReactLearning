import { useSubmit, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


export function loader({params}){
  return null;
}
export function action({request, params}){
  return null;
}



export default function LogoutPage() {
  return (<>
    <div id="timeput-page">
      <h2>Time out! ⏳🔐</h2>
      <h3>Still There?</h3>
      <i>It seems that you are not still there...</i>
    </div>
    </>);
}
