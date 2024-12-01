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
                        <LogOutButton />
                    </nav>
                </header>
            );
        }
    return (
        <header>
            <nav>
                <LoginButton />
            </nav>
        </header>
    );
  }
  export default Head;