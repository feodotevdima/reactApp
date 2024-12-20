import { getToken } from "./TokenProvider.ts";

async function GetId()
{
  const token= await getToken();
  const Url="https://localhost:7001/User/"+token;
  let response = await fetch(Url,
  {
    method: "GET",
    headers:     
    {
      'Accept': 'application/json',
      'Authorization': "Bearer " + token,
      'Content-Type': 'application/json'
    },
  });
  const j = await response.json();
  return j;
}

export default GetId