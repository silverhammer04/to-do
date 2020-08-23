import React from "react";

export default class TodoForm extends React.Component{
 state ={
    list: "",
    items: [ "" ],
    completed: false
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const api_url = process.env.REACT_APP_API_URL;
    fetch(`${api_url}/todo`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(this.state)
    }).then(response => response.json())
      .then(data => console.log(data))
      .then(() => {
        this.setState({
            list: "",
            item: [ "" ],
            completed: false
        })
    }).then(this.props.refresh)
  }
    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value });
  }
  // handleItemsChange = (event, index) => {
  //   const updatedItems = this.state.items.concat([]);
  //   updatedItems[index] = event.target.value;
  //   this.setState({items: updatedItems});
  // }
  // addItem = (event) => {
  //   const newItems = this.state.items.concat([ "" ]);
  //   this.setState({items:newItems});
  // }
  // removeItem = (index) => {
  //   const newItems = this.state.items.concat([]);
  //   newItems.splice(index, 1);
  //   this.setState({ items: newItems });
  // }
  render() {
    const itemInputs = this.state.items.map((item, index) => {
        return ( console.log()
        //     <div>
        //         <input name={index}
        //             type="text"
        //             placeholder="Add Todo Here"
        //             value={item}
        //             onChange={(event) => this.handleItemsChange(event, index)} 
        //             />
        //         <input className="remove-item"
        //             type="button"
        //             value="-"
        //             onClick={()=> this.removeItem(index)}/>        
        //     </div>
        )
    })
      return (
        <form className="todo-form" onSubmit={this.handleSubmit}>
            <input
                label="List"
                type="text"
                name="list"
                placeholder="Name Your List"
                value={this.state.list}
                onChange={this.handleChange}
                required/>
            <div>
            {itemInputs}
            {/* <form onSubmit={this.handleSubmit}>
                <input id="add_item" 
                    type="button" 
                    value="Add task"
                    onClick={this.addItem}/>
                    
                <input type="submit" value="Add Todo"/>
            </form> */}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
  }
}
