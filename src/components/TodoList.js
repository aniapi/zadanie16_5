import React from 'react';
import uuid from 'uuid';
// import style from './TodoList.css';

const Todo = ({item, removeItem}) => {
	return(
		<li onClick={() => removeItem(item.id)}>
			{item.text}
		</li>	
	);
}

const TodoList = ({tasks, remove}) => {  
 	const todo = tasks.map(
 		task => {
 			return <Todo item={task} removeItem={remove} key={task.id} />
 		} 
 	)
	return(
		<ul>
			<Todo />
		</ul>
	)
}

export default TodoList;