import React from "react";

const url="https://localhost:7002/Auth/logout";

async function logout()
{
  const response = await fetch(url,
  {
    method: "DELETE",
    headers:     
    {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      AccessToken: sessionStorage.accessToken
    })
  });
  console.log(response.status)
  if(response.ok)
  {
    sessionStorage.setItem("accessToken", null);
    sessionStorage.setItem("refreshToken", null);
  }
}

function LogOutButton()
{
    const isValide = () =>{
      if ((sessionStorage.accessToken==null)&&(sessionStorage.refreshToken==null))
        return false;
      return true;
    }
    const handleSubmit = () => {
      if(isValide)
        logout();
    }
    return (
        <button type="Submit" onClick={handleSubmit}>Выйти</button>
    );
  }
  export default LogOutButton;