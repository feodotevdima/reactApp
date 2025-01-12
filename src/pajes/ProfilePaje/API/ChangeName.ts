import { getToken } from "../../../shared/TokenProvider.ts";


async function ChangeName(id, name)
{
  const token= await getToken();
  const Url="https://localhost:7001/User/"+id;

  let response1 = await fetch(Url,
  {
    method: "PUT",
    headers:     
    {
      'Accept': 'application/json',
      'Authorization': "Bearer " + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        name
    )
  });

  const url="https://localhost:7003/Wish/update/name/"+id;
  let response2 = await fetch(url,
  {
    method: "PUT",
    headers:     
    {
      'Accept': 'application/json',
      'Authorization': "Bearer " + token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        name
    )
  });
  if(response1.status==200 && response2.status==200)
    return 200
  return 0
}

export default ChangeName