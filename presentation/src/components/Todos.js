import React from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'


class Todos extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: [ ]
        }
        this.getTodos = this.getTodos.bind(this);
    }
    getTodos () {
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/todo`)
            .then(response => response.json())
            .then(data => this.setState({todos:data}));
    }
    componentDidMount() {
        this.getTodos();
    }
    
    deleteTodos = (id, refresh) => {
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/todo/${id}`, {
            method: "DELETE"
        }) .then(response => response.json())
            .then(data =>{ 
                console.log(data);
                refresh();
            })
    }
    
    render() {
        const displayTodos = this.state.todos.map(todo =>
            <Todo 
                key={todo._id} 
                todo={todo}
                deleteTodos={this.deleteTodos}
                refresh={this.getTodos} />
        ); 
        return (
            <div>
                <h2>Todo List</h2>
                <TodoForm refresh={this.getTodos} />
                <ul>
                    {displayTodos} 
                
                </ul>
                             
            </div>    
        )
    }   
}
export default Todos;