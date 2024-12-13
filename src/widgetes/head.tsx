import React from "react";
import { useEffect } from "react";
import LogOutButton from "./components/LogOutButton.tsx";
import LoginButton from "./components/LoginButton.tsx";

function Head()
{
    const[auth, setAuth]=React.useState(sessionStorage.accessToken!=null && sessionStorage.accessToken!="");
    
    useEffect(()=>{
        setAuth(sessionStorage.accessToken!=null && sessionStorage.accessToken!="")
      }, [sessionStorage.accessToken]);

    return (
        <header>
            <nav>
                <a href="http://localhost:3000/">Главная</a>
                {auth ? <LogOutButton /> : <LoginButton />}
            </nav>
        </header>
    );
}
  export default Head;