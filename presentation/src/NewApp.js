// Not used, just a tutorial I did.

import React, { Component } from 'react';
import './App.css';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

class NewApp extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem: "",
      list:[]
    }
  }

  updateInput(key, value){
    this.setState({
      [key]: value
    });
  }

  addItem() {
      // Creates unique id for item
      const newItem={
          id: 1 + Math.random(),
          value: this.state.newItem.slice()
      };
      // Copies current list of items
      const list = [...this.state.list];
      // Adds item to list
      list.push(newItem);
      // Updates state with item and refeshes newItem input
      this.setState({
          list,
          newItem: ""
      });
  }

  deleteItem(id) {
      // Copies current list of items
    const list = [...this.state.list];
      // Filters out deleted item
    const updateList = list.filter(item => item.id !== id)

    this.setState({list: updateList})
  }
  render() {
    return (
      <div className="App">
        <div>
          Add an Item...
          <br/>
          <input
            type="text"
            placeholder="Type item here"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>
            Add
          </button>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id} >
                  {item.value}
                  <button
                    onClick={() => this.deleteItem(item.id)} >
                        X
                  </button>
                </li>
              )
            })}  
          </ul>
        </div>
      </div>
    );
  }
}

export default NewApp;
