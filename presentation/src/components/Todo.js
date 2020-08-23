import React, { useState } from 'react';
import AddTask from './AddTask';

const Todo = ({ todo, toggleComplete, deleteTodos, refresh }) => {
    const [update, setUpdate] = useState(false);
    const toggleForm = () => setUpdate(!update);
    

    return (
        <div className="divList" >
            
            <ul>
              {todo.list}               
              <i onClick={() => toggleForm()} 
              className="fa fa-edit">
            </i>
              {update ? 
              <AddTask todo={todo}
              toggleForm={toggleForm} /> : ''}
              <li>{todo.item}</li>
            </ul>

            <i onClick={() => deleteTodos(todo._id, refresh)} 
            className="fa fa-trash-o"
            style={{color: "red"}}></i>     
        </div>
    );
}
    // input type="checkbox" onClick={handleCheckboxClick} 
    // function handleCheckboxClick() {
    //     toggleComplete(todo.id);
    // }

    // function handleRemoveClick() {
    //     removeTodo(todo.id);
    // }
export default Todo;
