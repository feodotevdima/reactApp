import { Login } from "../../../shared/TokenProvider.ts";

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
    const responseLogin = await Login(email, pass);
    return responseLogin;
  }
  return responseAdd.status;
}

export default SingUpUser;