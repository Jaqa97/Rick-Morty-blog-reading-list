import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Discover } from "./views/discover";
import { Personajes } from "./views/personajes";
import Personajesid from "./views/personajesid";
import Locationsid from "./views/locationsid";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="bg-dark">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar className="fixed"/>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/discover" element={<Discover />} />
						<Route path="/personajes" element={<Personajes />} />
						<Route path="/personajesid" element={<Personajesid/>}/>
						<Route path="/locationsid" element={<Locationsid/>}/>
					
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
