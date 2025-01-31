import React from "react";

function Eror(props) 
{
  if(props.text==="")
    return null
  if((props.text==="Успех") || (props.text==="Файл загружен"))
    return (
      <div>
        <p className="OkFon">{props.text}</p>
      </div>
    );
  return (
    <div>
      <p className="errorFon">{props.text}</p>
    </div>
  );
}
  
  export default Eror;