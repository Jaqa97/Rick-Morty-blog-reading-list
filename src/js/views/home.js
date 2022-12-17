import React, {useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import { Context } from "../store/appContext";
import Detalle from "../component/detalle";

export const Home = () => {
	const {store, actions} = useContext(Context);
	useEffect (()=>{
		actions.testGetStore();
		actions.testGetActions();

	},[])
	return(
	<div className="text-center bg-dark mt-5">
		<Jumbotron/>
		
		
	</div>
)};
