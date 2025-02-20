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
  const[wish, setWish]=React.useState([[{id: 0,userId: 0, userName: "0", image: "0", present: "0", price: 0}]]);
  const [search, setSearch] = React.useState('');

  useEffect(()=>{
    const get = async () =>{
      const data = await getWishs();
      setWish(data);
    }
    get();
  }, []);

  const filteredWishs = wish.filter(item =>
    item[0].userName.toLowerCase().includes(search.toLowerCase())
  );

  if(wish.length<1)
    {
      return(<></>);   
    }

  if(wish[0][0].id==0)
    return(<></>);
  
  const listItems = filteredWishs.map((wis) =>
    <ul key={wis[0].userId}>
      <li>
        <a href={"http://localhost:3000/profile/"+wis[0].userId}>
        <div className="wishText">
          <img src={"https://localhost:7001/"+wis[0].image} className="UserImage"/>
            {wis[0].userName}
        </div>
        </a>
      </li>
      <li>
        <ul className="wishs" >
          <UserWishs wishs={wis} />
        </ul>
      </li>
    </ul>
  );

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="ListWishs">
        {listItems}
      </div>
      </>
    );
  }
  
  export default MainPaje;