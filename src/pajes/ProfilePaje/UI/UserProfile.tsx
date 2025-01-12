import React from "react";
import { useEffect } from "react";
import GetUser from "../API/GetUser.ts";

function UserProfile(props) 
{
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    useEffect(()=>{
        const get = async () =>{
          const data = await GetUser(props.id);
          setName(data.name);
          setEmail(data.email);
        }
        get();
      }, []);
        return(
        <>
            <h2>Имя: {name}</h2> 
            <h2>Почта: {email}</h2> 
        </> 
        );
}

export default UserProfile;