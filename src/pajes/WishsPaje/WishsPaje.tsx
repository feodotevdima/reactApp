import React from "react";
import { useParams } from "react-router-dom";
import GetId from "../../shared/GetId.ts";
import { getToken } from "../../shared/TokenProvider.ts";
import SelfPaje from "./UI/SelfPaje.tsx";
import UserPaje from "./UI/UserPaje.tsx";
import "./WishPaje.css";


function WishsPaje() 
{
    const params = useParams();
    const id = params.id;
    const [userId, setId] = React.useState(0);

    const uId = async () =>{
        const token= await getToken();
        if(token==null)
          return null;
        const data = await GetId();
        setId(data.id)
    }
    uId();

    if (id)
    {
        return(<>{String(userId)===id ? <SelfPaje id={id} /> : <UserPaje id={id}/>}</>);
    }
    else
        window.location.replace("https:/localhost3000/eror");
}

export default WishsPaje;