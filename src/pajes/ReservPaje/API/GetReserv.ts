import { getToken } from "../../../shared/TokenProvider.ts";


async function GetReserv(id)
{
  const Url="https://localhost:7003/Wish/reserv/"+id;
  const token= await getToken();
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

export default GetReserv