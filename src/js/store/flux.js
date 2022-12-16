const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planetas:[],
			personajes:[], 
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getPersonajes:()=>{
				fetch("https://rickandmortyapi.com/api/character")
				.then(Response=>Response.json())
				.then(data=>{
					console.log(data.results)
					setStore({personajes:data.results})
				})
			}, 
			getPlanetas:()=>{
				fetch("https://rickandmortyapi.com/api/location")
				.then(Response=>Response.json())
				.then(data=>{
					console.log(data.results)
					setStore({planetas:data.results})
				})
			}, 
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
