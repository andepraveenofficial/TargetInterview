/* -----> Third Party Package <----- */
import React, { useState } from 'react';

/* -----> Functional Component <----- */
const TodoApp = () => {
	console.log('TodoApp Component');

	// State
	const [todo, setTodo] = useState('');
	const [todoList, setTodoList] = useState([
		/*{ 'id': 1, item: 'todo 1' }*/
	]);

	console.log(todoList);

	// Return JSX
	return (
		<div className="todoapp-component">
			<div className="todo-enter">
				<input
					type="text"
					onChange={(event) => setTodo(event.target.value)}
					placeholder="Enter Todo"
					value={todo}
				/>
				<button
					type="button"
					onClick={() => {
						setTodoList((prevState) => [
							...prevState,
							{ id: todoList.length + 1, item: todo },
						]);
						setTodo('');
					}}
				>
					Add
				</button>
			</div>
			<div className="todo-list">
				<ul>
					{todoList.map((eachTodo) => (
						<li key={eachTodo.id}>
							{eachTodo.item}
							<button
								type="button"
								onClick={() =>
									setTodoList((prevState) =>
										prevState.filter(
											(each) => each.id !== eachTodo.id,
										),
									)
								}
							>
								Delete
							</button>
							<button
								type="button"
								onClick={() => {
									setTodoList((prevState) =>
										prevState.map((each) =>
											eachTodo.id === each.id
												? { ...each, item: todo }
												: { ...each },
										),
									);
									setTodo('');
								}}
							>
								Update
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

/* -----> Default Export <----- */
export default TodoApp;
