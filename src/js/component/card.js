import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/discover.css"

export default function Card({titulo, ruta, type, dimension, foto}){
    return <div className="cartaconimagen card m-5 w-25">
    <img src={foto} className="fotolocation card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{type}</p>
      <p className="card-text">{dimension}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
}