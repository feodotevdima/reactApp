import React from "react";
import Eror from "../../shared/Eror.tsx";

const SingUpUrl="https://localhost:7003/Wish";

async function addWish(present : string, price: number)
{
  let responseAdd = await fetch(SingUpUrl,
  {
    method: "POST",
    headers:     
    {
      'Accept': 'application/json',
      'Authorization': "Bearer " + sessionStorage.accessToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "present": present,
      "price": price
    })
  });
  const j = await responseAdd.json()
  return responseAdd.status;
}

function AddWishPaje() 
{
  const[status, setStatus]=React.useState("");
  const[present, setPresent]=React.useState("");
  const[price, setPrice]=React.useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(sessionStorage.accessToken==null)
    {
      setStatus("Вы не авторизованны")
    }
  
    const status : number =await addWish(present, price);
  }

    return (
      <div>
        <Eror text={status}/>
        <form onSubmit={handleSubmit} className="fon">
          <h3>Добавить желание</h3>
          <p>
            <label>Подарок </label>
            <input type="text" value={present} onChange={(e) => setPresent(e.target.value)}></input>
          </p>
          <p>
            <label>Цена </label>
            <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))}></input>
          </p>
          <button type="submit">Добавить</button>
        </form>
      </div>
    );
  }
  
  export default AddWishPaje;