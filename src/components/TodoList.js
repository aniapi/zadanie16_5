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
 	const todoList = tasks.map(
 		task => {
 			return <Todo item={task} removeItem={remove} key={task.id} />
 		} 
 	)
	return(
		<ul>
<<<<<<< HEAD
			{todoList}
=======
            {todoList}
>>>>>>> 27ab337fd85bcf7d4a88d9c6cddfd2af52f499bf
		</ul>
	)
}

export default TodoList;