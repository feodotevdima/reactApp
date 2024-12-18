import React, { useEffect, useRef } from "react";
import { getToken, Logout } from "../../shared/TokenProvider.ts";


async function getUserId()
{
  const token= await getToken();
  const Url="https://localhost:7001/User/"+token;
  let response = await fetch(Url,
  {
    method: "GET",
    headers:     
    {
      'Accept': 'application/json',
      'Authorization': "Bearer " + token,
      'Content-Type': 'application/json'
    },
  });
  console.log(response);
  const j = await response.json();
  return j;
}

function useOutsideAlerter(onOutsideClick) {
    const ref = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      function handleClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onOutsideClick();
        }
      }
      
      document.addEventListener('mousedown', handleClick);
      
      return () => {
        document.removeEventListener('mousedown', handleClick);
      };
    }, [onOutsideClick]);
  
    return ref;
  }

const DropDown = () => {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(0);

  const handleOpen = () => {
    setOpen(!open);
  };
  const get = async () =>{
    const data = await getUserId()
    setId(data.id);
  }
  get();

  const logout = async () =>{
    await Logout();
    window.location.reload();
  }
  const outsideAlerterRef = useOutsideAlerter(() => setOpen(false));
  return (
    <div className="dropdown" ref={outsideAlerterRef}>
      <button onClick={handleOpen} className="menuButton"></button>
      {open ? (
        <ul className="menu">
          <li>
            <a href={"http://localhost:3000/profile/"+id}>Профиль</a>
          </li>
          <li>
          <a href={"http://localhost:3000/wishs/"+id}>Список желаний</a>
          </li>
          <li>
          <a href="http://localhost:3000/add">Добавить желание</a>
          </li>
          <li>
          <a href="#" onClick={logout}>Выйти</a>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default DropDown;