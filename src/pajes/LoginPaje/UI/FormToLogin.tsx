import React from "react";
import LoginUser from "../../../shared/LoginUser.ts";

function FormToLogin()
{
    const[email, setEmail]=React.useState("");
    const[pass, setPass]=React.useState("");

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
        console.log("введите все поля");
        return null
      }
      if(sessionStorage.accessToken!=null)
        if(sessionStorage.accessToken.length>1)
        {
          console.log("Пользователь уже зарегестрирован");
          return null
        }
      const response: number = await LoginUser(email, pass);
      return response;
    }


    return (
      <div className="F">
        <form onSubmit={handleSubmit}>
          <p>
            <label>Почта </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
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