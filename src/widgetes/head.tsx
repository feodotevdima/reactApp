import React from "react";
import LogOutButton from "./components/LogOutButton.tsx";
import LoginButton from "./components/LoginButton.tsx";

function Head()
{
    if(sessionStorage.accessToken!=null)
        if(sessionStorage.accessToken.length>1)
        {
            return (
                <header>
                    <nav>
                        <a href="http://localhost:3000/">Главная</a>
                        <LogOutButton />
                    </nav>
                </header>
            );
        }
    return (
        <header>
            <nav>
                <a href="http://localhost:3000/">Главная</a>
                <LoginButton />
            </nav>
        </header>
    );
  }
  export default Head;