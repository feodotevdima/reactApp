import React, { useEffect } from "react"; 
import GetWishs from "../API/GetWishs.ts"; 
import DelWish from "../API/DelWish.ts"; 

function SelfPaje(props) { 
    const [wishs, setWishs] = React.useState([]); 

    useEffect(() => { 
        const get = async () => { 
            try {
                const data = await GetWishs(props.id); 
                if (data) {
                    setWishs(data); 
                }
            } catch (error) {
                console.error("Ошибка при получении желаний:", error);
            }
        }; 
        get(); 
    }, [props.id]); 

    if (wishs.length < 1) { 
        return <h1 className="H">Пока что у вас нет желаний</h1>;    
    } 

    const change = (wish) => { 
        window.location.replace("http://localhost:3000/change/"+wish.id); 
    }; 

    const listItemsNotReserv = wishs
        .filter(wish => wish.reservUser == null)
        .map(wish => (
            <ul key={wish.id} className="selfWish"> 
                <li className="ll"> 
                    <div className="text-container">
                        <p>Подарок: {wish.present}</p> 
                        <p>Цена: {wish.price}</p>
                    </div>
                    <div className="button-group">
                        <button className="delButton" onClick={() => DelWish(wish.id)}>Удалить</button> 
                        <button className="changeButton" onClick={() => change(wish)}>Изменить</button> 
                    </div>
                </li> 
                <li> 
                </li> 
            </ul>
        )); 

    const listItemsReserv = wishs
        .filter(wish => wish.reservUser)
        .map(wish => (
            <ul key={wish.id} className="selfWish"> 
                <li className="ll"> 
                    <div className="text-container">
                        <p>Подарок: {wish.present}</p>
                        <p>Цена: {wish.price}</p>
                        <p>Подарит: {wish.reservUserName}</p>  
                    </div>
                    <div className="button-group">
                        <button className="delButton" onClick={() => DelWish(wish.id)}>Удалить</button> 
                        <button className="changeButton" onClick={() => change(wish)}>Изменить</button>
                    </div> 
                </li> 
            </ul>
        )); 

    return ( 
        <div> 
            {listItemsNotReserv.length > 0 ? ( 
                <> 
                    <h1 className="H">Не забронированные желания</h1> 
                    <div className="selfList"> 
                        {listItemsNotReserv} 
                    </div> 
                </> 
            ) : ( 
                <h1>Все желания заняты</h1> 
            )} 

            {listItemsReserv.length > 0 ? ( 
                <> 
                    <h1 className="H">Забронированные желания</h1> 
                    <div className="selfList"> 
                        {listItemsReserv} 
                    </div> 
                </> 
            ) : ( 
                <h1>Пока что никто не забронировал</h1> 
            )} 
        </div> 
    ); 
} 

export default SelfPaje;