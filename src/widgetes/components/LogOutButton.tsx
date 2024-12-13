import React from "react";
import { Logout } from "../../shared/TokenProvider.ts";

function LogOutButton()
{
  
    const isValide = () =>{
      if (((sessionStorage.accessToken===null)&&(sessionStorage.refreshToken===null))||((sessionStorage.accessToken==="")&&(sessionStorage.refreshToken==="")))
      {
        return false;
      }
      return true;
    }
    const out = async () => {
      if(isValide())
      {
        await Logout();
        window.location.replace("http://localhost:3000");
      }
    }

    const Add = (e) => {
      window.location.replace("http://localhost:3000/add");
    }

    return (
      <>
        <button type="button" onClick={out}>Выйти</button>
        <button type="button" onClick={Add}>Добавить подарок</button>
      </>
    );
  }
  export default LogOutButton;