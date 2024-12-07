import React from "react";
import LogOutButton from "./components/LogOutButton.tsx";
import LoginButton from "./components/LoginButton.tsx";

function Head()
{
    const[auth, setAuth]=React.useState(sessionStorage.accessToken);
    return (
        <header>
            <nav>
                <a href="http://localhost:3000/">Главная</a>
                {auth ? <LogOutButton onChange={(i) => setAuth(i)}/> : <LoginButton />}
            </nav>
        </header>
    );
}
  export default Head;