import React,{Component,PropTypes} from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap";

export default class ChildCell extends React.Component {
    render() {
        const { item} = this.props;
        let items=[];
        for (let key of Object.keys(item)) {
            const value = item[key];
                items.push(<td>{value}</td>);
        }
        return (
            <tr>
                {items}
            </tr>
        );
    }
}