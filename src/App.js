import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            newItem:"",
            list: []
        }
    }
    updateInput(key, value) {
        //update react state
        this.setState({
            [key]: value
        });
    }
    addItem() {
        //create an item with a unique id
        const newItem = {
            id: (Math.random() + 1),
            value: this.state.newItem.slice()
        };
        //copy of current list of items
        const list = [...this.state.list];
        //add new item to list
        list.push(newItem);
        //update state with new list and reset newItem input
        this.setState({
            list,
            newItem:""
        });
    }
    deleteItem(id) {
        //copy of current list of items
        const list = [...this.state.list];
        //filter out item being deleted
        const updatedList = list.filter(item => item.id !== id);

        this.setState({list: updatedList});
    }

    render() {
        return (
            <div className="App">
                <div>
                    Jill's To Do List
                    <br />
                    <input type="text" placeholder="Type items here..." className="input" value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)} />
                    <button className="myButton" onClick={() => this.addItem()}>
                        Add
                    </button>
                    <br />
                    <ul>
                        {this.state.list.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.value}
                                    <button className="deleteButton" onClick={() => this.deleteItem(item.id)}>
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

export default App;
