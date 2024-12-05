import React from "react";

const SingUpUrl="https://localhost:7003/Wish";

async function AddWish(present : string, price : number)
{
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
      WishList:
        [
          {
            "present": "string",
            "price": 0
          }
        ]
    })
  });
  if(responseAdd.status==401)
    {
      console.log('refresh')
      const responseRef = await fetch("https://localhost:7002//Auth/refreshToken",
        {
          method: "PUT",
          headers:     
          {
            'Accept': 'application/json',
            'Authorization': "Bearer " + sessionStorage.accessToken,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            WishList:
              [
                {
                  "refreshToken": sessionStorage.accessToken
                }
              ]
          })
        });

        responseAdd = await fetch(SingUpUrl,
          {
            method: "POST",
            headers:     
            {
              'Accept': 'application/json',
              'Authorization': "Bearer " + sessionStorage.accessToken,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              WishList:
                [
                  {
                    "present": "string",
                    "price": 0
                  }
                ]
            })
          });
    }
  if(responseAdd.ok)
  {
    console.log(111111)
  }
  console.log(responseAdd.status);
}

function IndexPaje() 
{
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(sessionStorage.accessToken==null)
    {
      console.log("adsvfdas");
      return null
    }
  
    await AddWish('aaaaaaa', 222);
  }

    return (
      <div className="IndexPaje">
        <button type="submit" onClick={handleSubmit}>ihoioijioj</button>
      </div>
    );
  }
  
  export default IndexPaje;