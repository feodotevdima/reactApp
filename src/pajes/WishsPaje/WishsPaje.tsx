import React from "react";
import { useParams } from "react-router-dom";

function WishsPaje() 
{
    const params = useParams();
    const id = params.id;
    if (id) {
        return(<h1>{id}</h1>)
    }
    else
        window.location.replace("https:/localhost3000/eror");
}

export default WishsPaje;