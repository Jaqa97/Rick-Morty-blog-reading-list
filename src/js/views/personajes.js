import React, { useContext } from "react";
import { Navbar } from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Card from "../component/card";
import Carta from "../component/carta";
import { Context } from "../store/appContext";

export const Personajes = () =>{
    const {store} = useContext(Context);
    return <div className="justify-content-center bg-dark mt-5  ">
    <Carta/>
    <div className="my-3">
        <h1 className="text-light text-center">All about Rick & Morty</h1>
    </div>
    <div className="row mx-5 px-5 container-fluid">
        {store.personajes.map((elm, index)=>{
            return <Card titulo={elm.name} dimension={elm.status} type={elm.species} foto="https://assets.stickpng.com/thumbs/58f37720a4fa116215a9240f.png" />
        })}
        <Card/>
    </div>
    
</div>

}
