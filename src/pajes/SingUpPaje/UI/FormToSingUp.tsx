import React from "react";
import SingUpUser from "../API/SingUpUser.ts";

function FormToSingUp()
{
    const[name, setName]=React.useState("");
    const[email, setEmail]=React.useState("");
    const[pass, setPass]=React.useState("");

    const isValide = () =>{
      if (name.length<2)
        return false;
      if (email.length<2)
        return false;
      if (pass.length<2)
        return false;
      return true;
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!isValide())
        console.log("введите все поля");
      if(sessionStorage.accessToken!=null)
        if(sessionStorage.accessToken.length>1)
        {
          console.log("Пользователь уже зарегестрирован");
          return null
        }
      const response = SingUpUser(name, email, pass);
      console.log(response);

    }


    return (
      <div className="F">
        <form onSubmit={handleSubmit}>
          <p>
            <label>Имя </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
          </p>
          <p>
            <label>Почта </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </p>
          <p>
            <label>Пароль </label>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)}></input>
          </p>
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
    
    export default FormToSingUp;