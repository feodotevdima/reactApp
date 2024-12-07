import React from "react";

const SingUpUrl="https://localhost:7003/Wish";

async function addWish(present : string, price : number)
{

  const presents = 'ojpojp';
  const prices = '55';

  let responseAdd = await fetch(SingUpUrl,
  {
    method: "POST",
    headers:     
    {
      'Accept': 'application/json',
      'Authorization': "Bearer " + sessionStorage.accessToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "present": presents,
      "price": prices
    })
  });
  const j = await responseAdd.json()
  console.log(j);
  console.log(j.id);
  return responseAdd.status;
}

function AddWishPaje() 
{
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(sessionStorage.accessToken==null)
    {
      return null
    }
  
    const status : number =await addWish('aaaaaaa', 222);
  }

    return (
      <div className="IndexPaje">
        <button type="submit" onClick={handleSubmit}>ihoioijioj</button>
      </div>
    );
  }
  
  export default AddWishPaje;