import React, { useEffect } from "react";

const SingUpUrl="https://localhost:7003/Wish/all";

async function getWishs()
{
  let response = await fetch(SingUpUrl,
  {
    method: "GET",
    headers:     
    {
      'Accept': 'application/json',
      'Authorization': "Bearer " + sessionStorage.accessToken,
      'Content-Type': 'application/json'
    },
  });
  const j = await response.json()
  //console.log(j)
  return j;
}


function MainPaje() 
{
  const[wish, setWish]=React.useState([{id: 0,userId: 0, userName: "0", present: "0", price: 0}]);

  useEffect(()=>{
    const get = async () =>{
      const data = await getWishs();
      setWish(data);
    }
    get();
  }, []);

  
  const listItems = wish.map((wish) =>
    <li key={wish.id}>{wish.present}</li>
  );

  return (
      <div className="IndexPaje">
      <ul>
        {listItems}
      </ul>
      </div>
    );
  }
  
  export default MainPaje;