import React from "react";

function UserWishs(props) 
{

  var countries_returned = [props.wishs[0]];

  for (let i = 1; i < props.wishs.length && countries_returned.length < 3; i++) 
  {
    countries_returned.push(props.wishs[i]);
  } 

  const listItems = countries_returned.map((w) => 
    <li key={w.id}><a href={"http://localhost:3000/Wishs/"+w.userId}>{w.present}</a></li>      
  );

  return (
      <>
        {listItems}
      </> 
    );
  }
  
  export default UserWishs;