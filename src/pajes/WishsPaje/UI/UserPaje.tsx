import React, { useEffect } from "react";
import GetWishs from "../API/GetWishs.ts";
import Reserv from "../API/Reserv.ts";
import { getToken } from "../../../shared/TokenProvider.ts";

function UserPaje(props)
{

    const [wishs, setWishs] = React.useState([{id:0, present:"", price:"", reservUser:0, userId:0, userName:""}])
    useEffect(()=>{
        const get = async () =>{
          const data = await GetWishs(props.id);
          setWishs(data);
        }
        get();
      }, []);

      if(wishs.length<1)
      {
        window.location.replace("http://localhost:3000")
        return(<></>);   
      }

      if(wishs[0].id===0)
        return(<></>);   

      const ReservButton = async (id) => {
        const token = await getToken();
        if(token===null)
            window.location.replace("http://localhost:3000/login")
        else
            Reserv(id)
      }

      const listItems= wishs.map((wish) =>
        wish.reservUser==null ?
        <ul key={wish.id} className="UserWish">
          <li>
            Подарок: {wish.present}
          </li>
          <li>
            Цена: {wish.price}
          </li>
          <li>
            <button onClick={() => ReservButton(wish.id)}> Забронировать</button>
          </li>
        </ul> 
        : null 
      );

      return(<div >{listItems}</div>)
}
export default UserPaje