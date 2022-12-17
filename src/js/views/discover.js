import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Card from "../component/card";
import Carta from "../component/carta";
import { Context } from "../store/appContext";


export const Discover = () =>{
    const {store} = useContext(Context);
    return <div className="justify-content-center bg-dark mt-5  ">
    <Carta/>
    <div className="my-3">
        <h1 className="text-light text-center">All about Rick & Morty</h1>
    </div>
    <div className="row mx-5 px-5 container-fluid">
        {store.planetas.map((elm, index)=>{
            return <Card titulo={elm.name} dimension={elm.dimension} type={elm.type} foto="https://i.pinimg.com/originals/97/86/ec/9786ec883756c755df35a331ff902f3b.png" />
        })}
        
    </div>
    
</div>

}