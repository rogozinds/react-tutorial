import React,{Component,PropTypes} from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap";
import Cell from "./Cell"
export default class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            children:[],
            isExpanded: false
        };

    }

    calcVisibilityStyle(isVisible) {
        console.log(isVisible);
        if (isVisible) {
            return 'visible';
        }
        else {
            return 'hidden';
        }
    }

    render() {
        const { item,level,isVisible,children } = this.props;
        const items = [];

        //construct structure
        for (let key of Object.keys(item)) {
            const value = item[key];
            if (Array.isArray(value)) {
                for (let i of value) {
                    children.push(<Cell value={i} isExpanded={false} children={[]}></Cell>)
                }
                items.push(<Cell value={key} isExpanded={false} isVisible={true} children={children}></Cell>);
            }
            else {
                items.push(<Cell value={value} isExpanded={false} isVisible={true} children={[]}></Cell>);
            }
        }

        return (
        <div>
            {items}
        </div>
        );
    }
}

Item.propTypes = {
    item: React.PropTypes.object
};
Item.defaultProps = {
    item: {},
    level: 0,
    isVisible: true,
    isExpanded: false,
    children:[]
};