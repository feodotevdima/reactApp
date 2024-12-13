import React from "react";

function UserWishs(props) 
{
  const listItems = props.wishs.map((w) => 
    <li key={w.id}>{w.present}</li>      
  );

  return (
      <div className="UserWishs">
        {listItems}
      </div>
    );
  }
  
  export default UserWishs;