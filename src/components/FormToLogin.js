import React from "react";

const url="http://localhost:5140/User/LogIn";


async function PostUsers(email, pass)
{
  const response = await fetch(url,
  {
    method: "POST",
    headers:     
    {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: pass
    })
  });
  if(response.ok)
  {
    let json = await response.json();
    sessionStorage.setItem("tokenKey", json.token);
    console.log("ok");
  }
}


function FormToSingUp()
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
    const handleSubmit = (e) => {
      e.preventDefault();
      if(isValide())
        PostUsers(email, pass);
      else
        console.log("введите все поля");

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
          <button type="Submit">Войти</button>
        </form>
      </div>
    );
  }
    
    export default FormToSingUp;