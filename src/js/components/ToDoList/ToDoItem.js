import React from "react";

export default class ToDoItem extends React.Component {
    render() {
        return (
            <li>{this.props.item}</li>
        );
    }
}