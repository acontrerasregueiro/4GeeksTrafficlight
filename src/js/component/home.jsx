import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	/**
	 *  Using the useState hook, you have to pay atention to 3 elements:
	 *  - encendido: a variable that will change over time (can have any name)
	 *  - setEncendido:  a function that resets the value of opened (can by any name)
	 *  - useState: this is the hook, it has to be setState and it receives the initial value for "opened"
	 */
	const [encendido, setEncendido] = useState(0);
	return (
		<div>
			<div
				className={encendido == 1 ? "verde luz encendido" : "verde luz"}
				onClick={() => setEncendido(1)}>
				{encendido == 1 ? "ON " : "OFF"}
			</div>
			<div
				className={encendido == 2 ? "ambar luz encendido" : "ambar luz"}
				onClick={() => setEncendido(2)}>
				{encendido == 2 ? "ON " : "OFF"}
			</div>
			<div
				className={encendido == 3 ? "rojo luz encendido" : "rojo luz"}
				onClick={() => setEncendido(3)}>
				{encendido == 3 ? "ON " : "OFF"}
			</div>
		</div>
	);
};

export default Home;
