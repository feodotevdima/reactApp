import React, { useEffect } from "react";
import UserWishs from "./UI/UserWishs.tsx";
import { getToken } from "../../shared/TokenProvider.ts";

const SingUpUrl="https://localhost:7003/Wish/all";

async function getWishs()
{
  const token= await getToken();
  let response = await fetch(SingUpUrl,
  {
    method: "GET",
    headers:     
    {
      'Accept': 'application/json',
      'Authorization': "Bearer " + token,
      'Content-Type': 'application/json'
    },
  });
  const j = await response.json();
  return j;
}


function MainPaje() 
{
  const[wish, setWish]=React.useState([[{id: 0,userId: 0, userName: "0", present: "0", price: 0}]]);

  useEffect(()=>{
    const get = async () =>{
      const data = await getWishs();
      setWish(data);
    }
    get();
  }, []);

  const listItems = wish.map((wis) =>
    <button key={wis[0].userId}>
      <ul>
        <UserWishs wishs={wis} />
      </ul>
    </button>
  );

  return (
      <div className="IndexPaje">
        {listItems}
      </div>
    );
  }
  
  export default MainPaje;