import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Card from "../component/card";

export const Discover = () => (
	<div className="justify-content-center bg-dark mt-5  ">
        <div className="justify-content-center row w-50 mx-5 px-5">
            <img src="https://aldescubierto.org/wp-content/uploads/2021/07/Portada_RickyMorty_web.jpg"/>
        </div>
        <div className="mx-5 px-5">
            <Card/>
        </div>
		
    </div>
		
	
);
