import React from "react";
import ToDoItem from "./ToDoItem";
import {arrays} from "lodash";

export default class ToDoList extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [
                "Morning exercise",
                "Read 20 pages",
                "Buy milk"
            ]
        }
    }

    addItem() {
        this.setState({items: [...this.state.items, input.value]});
    }

    sort() {
        this.setState({items: _.sortBy(this.state.items)});
    }

    render() {
        const items = this.state.items;
        let count = 0;
        const ToDoComponents = items.map((item)=> {
            count++;
            return <ToDoItem key={count} item={item}></ToDoItem>
        })
        return (
            <div style={{margin:'20px'}}>
                <h1>TODO list</h1>
                Add new item: <input id="input" type="text"/>
                <button onClick={this.addItem.bind(this)}>add item</button>
                <button onClick={this.sort.bind(this)}>sort list</button>
                <ul>
                    {ToDoComponents}
                </ul>
            </div>
        );
    }
}