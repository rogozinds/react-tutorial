import React,{Component,PropTypes} from "react";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import * as _ from "lodash";
export default class ChildCell extends React.Component {
    render() {
        const { item,level} = this.props;
        let items=[];
        for (let key of Object.keys(item)) {
            const value = item[key];
            const padding=10*level;
            const style={paddingLeft:padding};
            let id = _.uniqueId();
            items.push(<td key={id} style={style}>{value}</td>);
        }
        return (
            <tr>
                {items}
            </tr>
        );
    }
}