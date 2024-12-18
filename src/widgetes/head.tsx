import React from "react";
import { useEffect } from "react";
import LoginButton from "./components/LoginButton.tsx";
import DropDown from "./components/DropDown.tsx";
import "./head.css";

function Head()
{
    const[auth, setAuth]=React.useState(sessionStorage.accessToken!=null && sessionStorage.accessToken!="");
    
    useEffect(()=>{
        setAuth(sessionStorage.accessToken!=null && sessionStorage.accessToken!="")
      }, [sessionStorage.accessToken]);

    return (
        <header>
            <nav>
                <a href="http://localhost:3000">Главная</a>
                {auth ? <DropDown /> : <LoginButton />}
            </nav>
        </header>
    );
}
  export default Head;