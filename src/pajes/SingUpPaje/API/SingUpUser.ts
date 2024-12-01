import LoginUser from "../../../shared/LoginUser.ts";

const SingUpUrl="https://localhost:7001/User/add";

async function SingUpUser(name: string, email: string, pass: string)
{
  const responseAdd = await fetch(SingUpUrl,
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

  if(responseAdd.ok)
  {
    const responseLogin = LoginUser(email, pass);
    return responseLogin;
  }
  return responseAdd;
}

export default SingUpUser;