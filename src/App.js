import React, { startTransition } from "react";
import IndexPaje from "./pajes/IndexPaje";
import SingUpPaje from "./pajes/SingUpPaje";
import LoginPaje from "./pajes/LogInPaje";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const url="http://localhost:5140/User/all";

async function GetUsers()
{
  const t =sessionStorage.getItem("tokenKey");
  let response = await fetch(url,{
    method: "GET",
    headers: 
    {
        "Accept": "application/json",
        "Authorization": "Bearer " + t
    }
  });
  if(response.ok)
  {
    let json = await response.json();
    console.log(json);
  }
}

function App() 
{
  //const json = GetUsers();
  const [j, setj] = React.useState(GetUsers());
  return (
    <div>
      {/* <SingUpPaje /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/singup" element={<SingUpPaje />} />
          <Route path="/login" element={<LoginPaje />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
