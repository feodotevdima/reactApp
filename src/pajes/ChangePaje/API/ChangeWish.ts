import { getToken } from "../../../shared/TokenProvider.ts";


async function ChangeWish(id, present, price)
{
  const Url="https://localhost:7003/Wish/update/wish/"+id;
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
    body: JSON.stringify({
        "present": present,
        "price": price,

      })
  });
  return response.status
}

export default ChangeWish