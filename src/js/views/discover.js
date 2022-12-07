import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Card from "../component/card";
import Carta from "../component/carta";

export const Discover = () => (
	<div className="justify-content-center bg-dark mt-5  ">
        <Carta/>
        <div className="my-3">
            <h1 className="text-light text-center">All about Rick & Morty</h1>
        </div>
        <div className="mx-5 px-5">
            <Card/>
        </div>
		
    </div>
		
	
);
