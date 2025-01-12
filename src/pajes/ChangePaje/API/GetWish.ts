import { getToken } from "../../../shared/TokenProvider.ts";


async function GetWish(id)
{
  const Url="https://localhost:7003/Wish/get-wish/"+id;
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

  try
  {
    const j = await response.json();
    return j;
  }
  catch
    {
        window.location.replace("http://localhost:3000/eror")
        return
    }
}

export default GetWish