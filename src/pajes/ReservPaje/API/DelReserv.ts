import { getToken } from "../../../shared/TokenProvider.ts";


async function DelReserv(id)
{
    console.log(id)
  const Url="https://localhost:7003/Wish/reserv/del/"+id;
  const token= await getToken();
  let response = await fetch(Url,
  {
    method: "PUT",
    headers:     
    {
      'Accept': 'application/json',
      'Authorization': "Bearer " + token,
      'Content-Type': 'application/json'
    },
  });
  const j = await response.json();
  window.location.reload();
  return j;
}

export default DelReserv