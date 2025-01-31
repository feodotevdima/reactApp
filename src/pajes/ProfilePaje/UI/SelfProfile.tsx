import React from "react";
import { useEffect } from "react";
import GetUser from "../API/GetUser.ts";
import Eror from "../../../shared/Eror.tsx";
import ChangeName from "../API/ChangeName.ts";
import { getToken } from "../../../shared/TokenProvider.ts";

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
            {
              setStatus("Успех")
              setOldName(String(name))
            }
            else
              setStatus("Ошибка сервера");
            
            return response;
          }


        const Upload= async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const token= await getToken();
          console.log(token);
          const response = await fetch('https://localhost:7001/User/upload', {
              method: 'POST',
              headers:     
              {
                'Authorization': "Bearer " + token
              },
              body: formData,
          });

          if(response.status==200)
            setStatus("Файл загружен")
          else
            setStatus("Ошибка")
      };

        return(
        <>
        <Eror text={status} className="er"/>
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
        <div className="upload">
          <form onSubmit={Upload} encType="multipart/form-data">
            <h2>Загрузите своё фото</h2>
            <input type="file" name="file" />
            <button type="submit">Upload</button>
          </form>
        </div>
      </>
        );
}

export default SelfProfile;