import React from "react";
import { useEffect } from "react";
import GetUser from "../API/GetUser.ts";
import Eror from "../../../shared/Eror.tsx";
import ChangeName from "../API/ChangeName.ts";

function SelfProfile(props) 
{
    const[status, setStatus]=React.useState("");
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [oldName, setOldName] = React.useState("")

    useEffect(()=>{
        const get = async () =>{
          const data = await GetUser(props.id);
          setName(data.name);
          setEmail(data.email);
          setOldName(data.name);
        }
        get();
      }, []);
          
          const handleSubmit = async (e) => {
            e.preventDefault();

            const response = await ChangeName(props.id, name);
            
            if(response===200)
              setStatus("Успех")
            else
              setStatus("Ошибка сервера");
            
            return response;
          }

        return(
        <div>
        <Eror text={status}/>
        <form className="profile" onSubmit={handleSubmit}>
          <p>
            <label>Почта </label>
            <code className="email">{email}</code>
          </p>
          <p>
            <label>Имя </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
          </p>
          {(oldName!=name && name.length>0) ? <button type="submit">Изменить имя</button> : <></>}
        </form>

      </div>
        );
}

export default SelfProfile;