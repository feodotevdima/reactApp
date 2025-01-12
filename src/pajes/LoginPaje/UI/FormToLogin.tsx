import React from "react";
import { Login } from "../../../shared/TokenProvider.ts";
import Eror from "../../../shared/Eror.tsx";

function FormToLogin()
{
    const[email, setEmail]=React.useState("");
    const[pass, setPass]=React.useState("");
    const[status, setStatus]=React.useState("");

    const isValide = () =>{
      if (email.length<2)
        return false;
      if (pass.length<2)
        return false;
      return true;
    }
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(!(isValide()))
      {
        setStatus("Заполните все поля");
        return null
      }
      if(sessionStorage.accessToken!=null)
        if(sessionStorage.accessToken.length>1)
        {
          setStatus("Вы уже зашли");
          return null
        }
      const response: number = await Login(email, pass);
      
      if(response===200)
        window.location.replace("http://localhost:3000");
      else if((response===400) || (response===401))
        setStatus("Неверный логин или пароль");
      else
        setStatus("Ошибка сервера");
      
      return response;
    }

    return (
      <div>
        <Eror text={status}/>
        <form onSubmit={handleSubmit} className="fon">
          <h3>Вход</h3>
          <p>
            <label>Почта </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </p>
          <p>
            <label>Пароль </label>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)}></input>
          </p>
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
    
    export default FormToLogin;