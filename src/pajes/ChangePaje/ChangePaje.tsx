import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import GetWish from "./API/GetWish.ts";
import Eror from "../../shared/Eror.tsx";
import ChangeWish from "./API/ChangeWish.ts";

function ChangePage(props)
{
    const params = useParams();
    const id = params.id;
    const [present, setPresent] = React.useState("")
    const[price, setPrice] = React.useState("")
    const [wish, setWish] = React.useState({id:0, present:"", price:"", reservUser:"", reservUserName:"", userId:0, userName:""})
    const[status, setStatus]=React.useState("");
    useEffect(()=>{
        const get = async () =>{
          const data = await GetWish(id);   
          setWish(data);
          setPresent(data.present);
          setPrice(data.price);
        }
        get();
      }, []);

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if(sessionStorage.accessToken==null)
          setStatus("Вы не авторизованны")
        if(present=="")
          setStatus("Вы не ввели название")
    
         const status : number =await ChangeWish(id, present, price);
    
         if(status!=200)
           setStatus("Ошибка сервера")
    
         if(status==200)
           window.location.replace("http://localhost:3000/wishs/"+wish.userId);
       }

    return(
        <div>
            <Eror text={status}/>
            <form onSubmit={handleSubmit} className="fon">
                <h3>Изменить желание</h3>
                <p>
                    <label>Подарок </label>
                    <input type="text" value={present} onChange={(e) => setPresent(e.target.value)}></input>
                </p>
                <p>
                    <label>Цена </label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                </p>
                <button type="submit">Изменить</button>
            </form>
        </div>
    )
}
export default ChangePage