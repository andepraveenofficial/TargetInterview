/* -----> Third Party Packages <----- */
import CounterApp from './Components/CounterApp';
import TodoApp from './Components/TodoApp';

/* -----> Functional Component <----- */
const App = () => {
	console.log('App Component');

	// Return JSX
	return (
		<div className="app-component">
			{/* <CounterApp /> */}
			<CounterApp />
		</div>
	);
};

/* -----> Default Export <----- */
export default App;
