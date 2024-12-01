import React from "react";
function LoginButton()
{
    const Login = (e) => {
        window.location.replace("http://localhost:3000/login");
    }

    const Singup = (e) => {
        window.location.replace("http://localhost:3000/singup");
    }

    return (
        <div>
            <button type="button" onClick={Login}>Войти</button>
            <button type="button" onClick={Singup}>Зарегистрироваться</button>
        </div>
    );
  }
  export default LoginButton;