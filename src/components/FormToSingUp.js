import React from "react";

const SingUpUrl="https://localhost:7001/User/add";
const LoginUrl="https://localhost:7002/Auth/login";

async function SingUpUser(name, email, pass)
{
  const response = await fetch(SingUpUrl,
  {
    method: "POST",
    headers:     
    {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: pass
    })
  });

  if(response.ok)
  {
    const response2 = await fetch(LoginUrl,
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
    console.log(response2.status)
    if(response2.ok)
    {
      let json = await response2.json();
      sessionStorage.setItem("accessToken", json.accessToken);
      sessionStorage.setItem("refreshToken", json.refreshToken);
      console.log(sessionStorage.accessToken);
      console.log(json.refreshToken);
    }
  }
}



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
      if(isValide())
        SingUpUser(name, email, pass);
      else
        console.log("введите все поля");

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
          <button type="Submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
    
    export default FormToSingUp;