import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import GetId from "../../shared/GetId.ts";
import { getToken } from "../../shared/TokenProvider.ts";
import Paje404 from "../Paje404/Paje404.tsx";
import GetReserv from "./API/GetReserv.ts";
import DelReserv from "./API/DelReserv.ts";

function ReservPaje() 
{
    const params = useParams();
    const id = params.id;
    const [userId, setId] = React.useState(0);
    const [wishs, setWishs] = React.useState([{id:0, present:"", price:"", reservUser:0, reservUserName:"", userId:0, userName:""}])

    useEffect(()=>{
        const get = async () =>{
            const data = await GetReserv(id);
        setWishs(data);
    }
    get();
    }, []);

    
    const uId = async () =>{
        const token= await getToken();
        if(token==null)
          return null;
        const data = await GetId();
        setId(data.id)
    }
    uId();

    if (id===String(userId))
    {
        if(wishs.length<1)
            {
              return(<h1 className="H">Вы пока что не забронировали не одно желание</h1>);   
            }
        const listItems= wishs.map((wish) =>
            <ul key={wish.id} className="UserWish">
              <li>
                Подарок: {wish.present} 
              </li>
              <li>
                Для: {wish.userName}
              </li>
              <li>
                Цена: {wish.price}
              </li>
              <li>
                <button onClick={() => DelReserv(wish.id)}>Отказаться</button>
              </li>
            </ul> 
          );
          return(<div >{listItems}</div>)
    }
    else
        return(<Paje404 />)
}

export default ReservPaje;