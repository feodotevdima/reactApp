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
  if(response.ok)
  {
    sessionStorage.setItem("accessToken", "");
    sessionStorage.setItem("refreshToken", "");
  }
}

function LogOutButton({onChange})
{
    const isValide = () =>{
      if (((sessionStorage.accessToken===null)&&(sessionStorage.refreshToken===null))||((sessionStorage.accessToken==="")&&(sessionStorage.refreshToken==="")))
      {
        return false;
      }
      return true;
    }
    const handleSubmit = () => {
      if(isValide())
        logout();
        onChange(null);
    }

    const Add = (e) => {
      window.location.replace("http://localhost:3000/add");
    }

    return (
      <>
        <button type="button" onClick={handleSubmit}>Выйти</button>
        <button type="button" onClick={Add}>Добавить подарок</button>
      </>
    );
  }
  export default LogOutButton;