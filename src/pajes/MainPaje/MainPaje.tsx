import React, { useEffect } from "react";
import UserWishs from "./UI/UserWishs.tsx";
import { getToken } from "../../shared/TokenProvider.ts";
import "./main.css";

const Url="https://localhost:7003/Wish/all";

async function getWishs()
{
  const token= await getToken();
  let response = await fetch(Url,
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
  if(wish[0][0].id==0)
    return(<></>);
  
  const listItems = wish.map((wis) =>
    <ul key={wis[0].userId}>
      <li>
        <button className="wishButton"></button>
        {wis[0].userName}
      </li>
      <li>
        <ul className="wishs" >
          <UserWishs wishs={wis} />
        </ul>
      </li>
    </ul>
  );

  return (
      <div className="ListWishs">
        {listItems}
      </div>
    );
  }
  
  export default MainPaje;