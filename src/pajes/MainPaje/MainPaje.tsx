import React from "react";

const SingUpUrl="https://localhost:7003/Wish";

async function AddWish(present : string, price : number)
{

  const presents = ['apple', 'orange', 'banana'];
  const prices = [1, 4, 6];

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
  console.log('resh')
  console.log(responseAdd.status);
  return responseAdd.status;
}

function IndexPaje() 
{
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(sessionStorage.accessToken==null)
    {
      return null
    }
  
    const status : number =await AddWish('aaaaaaa', 222);
  }

    return (
      <div className="IndexPaje">
        <button type="submit" onClick={handleSubmit}>ihoioijioj</button>
      </div>
    );
  }
  
  export default IndexPaje;