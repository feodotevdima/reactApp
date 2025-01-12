import { getToken } from "../../../shared/TokenProvider.ts";


async function DelWish(id)
{
  const Url="https://localhost:7003/Wish/"+id;
  const token= await getToken();
  let response = await fetch(Url,
  {
    method: "DELETE",
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


export default DelWish