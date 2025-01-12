import React from "react";
import { useParams } from "react-router-dom";
import GetId from "../../shared/GetId.ts";
import { getToken } from "../../shared/TokenProvider.ts";
import UserProfile from "./UI/UserProfile.tsx";
import SelfProfile from "./UI/SelfProfile.tsx";
import "./profile.css";

function ProfilePaje() 
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
        return(<>{String(userId)===id ? <SelfProfile id={id}/> : <UserProfile id={id} />}</>);
    }
    else
        window.location.replace("http:/localhost3000/eror");
}

export default ProfilePaje;
