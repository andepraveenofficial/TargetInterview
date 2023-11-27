/* -----> Third Party Package <----- */
import React, { useState } from 'react';

/* -----> Functional Component <----- */
const CounterApp = () => {
	console.log('CounterApp Component');

	// State
	const [counter, setCounter] = useState(0);

	// Return JSX
	return (
		<div className="counterapp-component">
			<button
				type="button"
				onClick={() => setCounter((prevState) => prevState - 1)}
			>
				-
			</button>
			<span>{counter}</span>
			<button
				type="button"
				onClick={() => setCounter((prevState) => prevState + 1)}
			>
				+
			</button>
		</div>
	);
};

/* -----> Default Export <----- */
export default CounterApp;
