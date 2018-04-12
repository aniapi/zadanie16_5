import React from 'react';
import uuid from 'uuid';
import style from './TodoList.css';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                    text: 'clean room'
                }, {
                id: 2,
                    text: 'wash the dishes'
                }, {
                id: 3,
                	text: 'feed my cat'
                }
            ]
        };
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        const TodoList = props => {
        	return (
            	// <div className={style.TodoList}>
             //    	<p> Zadania: {props.list}<p/>
            	// </div>
        	);
    	}
	}

export default TodoList;