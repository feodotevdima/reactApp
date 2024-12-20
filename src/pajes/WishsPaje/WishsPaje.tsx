import React from "react";
import { useParams } from "react-router-dom";
import GetWishs from "./API/GetWishs.ts";
import GetId from "../../shared/GetId.ts";
import { getToken } from "../../shared/TokenProvider.ts";


const uId = async () =>{
    const token= await getToken();
    if(token==null)
      return null
    const data = await GetId()
    console.log(data)
    return data.id
}

function WishsPaje() 
{
    const params = useParams();
    const id = params.id;
    const [userId, setId] = React.useState(0);
    const i = async () =>{console.log(await GetWishs(id))}
    //i();

    const uId = async () =>{
        const token= await getToken();
        if(token==null)
          return null;
        const data = await GetId();
        setId(data)
    }
    uId();
    console.log(userId)

    if (id) {
        console.log(userId);
        console.log(id);
        if(userId==Number(id))
        {
            return(<h1>dgasgfa</h1>);
        }
        return(<h1>{id}</h1>);
    }
    else
        window.location.replace("https:/localhost3000/eror");
}

export default WishsPaje;