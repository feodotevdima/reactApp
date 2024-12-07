import React from "react";

const SingUpUrl="https://localhost:7003/Wish/all";
async function getWishs()
{
  let responseAdd = await fetch(SingUpUrl,
  {
    method: "GET",
    headers:     
    {
      'Accept': 'application/json',
      'Authorization': "Bearer " + sessionStorage.accessToken,
      'Content-Type': 'application/json'
    },
  });
  const j = await responseAdd.json()
  console.log(j);
  console.log(j.id);
  return j;
}


function MainPaje() 
{
  let json="";
  const feathWishs = async () => {
    const response =await getWishs();
    json=response;
  }

  feathWishs();


    return (
      <div className="IndexPaje">
        
      </div>
    );
  }
  
  export default MainPaje;