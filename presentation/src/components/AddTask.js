import React from 'react'

export default class AddItems extends React.Component {
    state ={
        list: this.props.todo.list,
        items: this.props.todo.items
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/todo/${this.props.todo._id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(this.state)
        }).then(response => response.json())
          .then(data => console.log(data))
          .then(this.props.toggleForm)
          .then(this.props.refresh)  
    }
    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value });
    }
    handleItemsChange = (event, index) => {
        const updatedItems = this.state.items.concat([]);
        updatedItems[index] = event.target.value;
        this.setState({items: updatedItems});
    }
    addItem = (event) => {
        const newItems = this.state.items.concat([ "" ]);
        this.setState({items:newItems});
    }
    removeItem = (index) => {
        const newItems = this.state.items.concat([]);
        newItems.splice(index, 1);
        this.setState({ items: newItems });
    }
    render() {
        const itemInputs = this.state.items.map((item, index) => {
            return (
                <div>
                    <input name={index}
                        type="text"
                        placeholder={'Item ${index + 1}'}
                        value={item}
                        onChange={(event) => this.handleItemsChange(event, index)} 
                        required/>
                    <input className="remove-item"
                        type="button"
                        value="-"
                        onClick={()=> this.removeItem(index)}/>        
                </div>
            )
        })
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            {itemInputs}
            
                <input id="add_item" 
                    type="button" 
                    value="Add Task"
                    onClick={this.addItem}/>
                    
                <input type="submit" value="Add Todo"/>
            </form>
            </div>
        )
    }
}
