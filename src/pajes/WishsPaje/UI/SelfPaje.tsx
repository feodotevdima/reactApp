import React, { useEffect } from "react";
import GetWishs from "../API/GetWishs.ts";
import DelWish from "../API/DelWish.ts";
import ChangePage from "../../ChangePaje/ChangePaje.tsx";

function SelfPaje(props)
{
    const [wishs, setWishs] = React.useState([{id:0, present:"", price:"", reservUser:0, reservUserName:"", userId:0, userName:""}])
    useEffect(()=>{
        const get = async () =>{
          const data = await GetWishs(props.id);
          setWishs(data);
        }
        get();
      }, []);

      if(wishs.length<1)
      {
        return(<h1 className="H">Пока что у вас нет желаний</h1>);   
      }

      if(wishs[0].id==0)
        return(<></>);   

      const change = (wish) => {
        window.location.replace("http://localhost:3000/change/"+wish.id)
      }

      const listItemsNotReserv = wishs.map((wish) =>
        wish.reservUser==null ?
        <ul key={wish.id} className="selfWish">
          <li>
            Подарок: {wish.present}
            <button className="delButton" onClick={() => DelWish(wish.id)}>Удалить</button>
            <button className="changeButton" onClick={() => change(wish)}>Изменить</button>
          </li>
          <li>
            Цена: {wish.price}
          </li>
        </ul> 
        : null 
      );

      const listItemsReserv = wishs.map((wish) =>
        wish.reservUser ?
        <ul key={wish.id} className="selfWish">
          <li>
            Подарок: {wish.present}
            <button className="delButton" onClick={() => DelWish(wish.id)}>Удалить</button>
            <button className="changeButton" onClick={() => change(wish.id)}>Изменить</button>
          </li>
          <li>
            Цена: {wish.price}
          </li>
          <li>
            Подарит: {wish.reservUserName}
          </li>
        </ul> 
        : null 
      );
      const SetItemsNotReserv = new Set(listItemsNotReserv);
      const SetItemsReserv = new Set(listItemsReserv);

      return (
          <div>
            {
                (SetItemsNotReserv.size>=1 && !SetItemsNotReserv.has(null)) ?
                <>
                    <h1 className="H">Не забронированные желания</h1>
                    <div className="selfList">
                        {listItemsNotReserv}
                    </ div>
                </>:
                <h1>Все желания заняты</h1>
            }
            {
                (SetItemsReserv.size>=1 && !SetItemsReserv.has(null)) ?
                <>
                    <h1 className="H">Забронированные желания</h1>
                    <div className="selfList">
                        {listItemsReserv}
                    </div>
                </>:
                <h1>Пока что никто не забронировал</h1>
            }
          </div>
        );
}
export default SelfPaje