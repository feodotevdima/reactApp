import React from "react";

function Eror(props) 
{
  if(props.text==="")
    return null
  return (
    <div>
      <p className="errorFon">{props.text}</p>
    </div>
  );
}
  
  export default Eror;