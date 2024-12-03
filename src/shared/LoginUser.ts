const url="https://localhost:7002/Auth/login";

async function LoginUser(email: string, pass: string)
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
    
  if(response.ok)
  {
    let json = await response.json();
    sessionStorage.setItem("accessToken", json.accessToken);
    sessionStorage.setItem("refreshToken", json.refreshToken);
  }
  return response.status;
}

export default LoginUser;