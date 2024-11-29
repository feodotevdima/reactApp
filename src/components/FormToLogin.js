import React from "react";

const url="https://localhost:7002/Auth/login";


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
      login: email,
      password: pass
    })
  });
  console.log(response.status)
  if(response.ok)
  {
    let json = await response.json();
    sessionStorage.setItem("accessToken", json.accessToken);
    sessionStorage.setItem("refreshToken", json.refreshToken);
    console.log(sessionStorage.accessToken);
    console.log(json.refreshToken);
  }
}


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
    
    export default FormToLogin;