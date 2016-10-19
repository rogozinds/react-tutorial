import React,{Component,PropTypes} from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap";

export default class ChildCell extends React.Component {
    render() {
        const { item,level} = this.props;
        let items=[];
        for (let key of Object.keys(item)) {
            const value = item[key];
            const padding=10*level;
            const style={paddingLeft:padding};
            items.push(<td style={style}>{value}</td>);
        }
        return (
            <tr>
                {items}
            </tr>
        );
    }
}