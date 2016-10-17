import React,{Component,PropTypes} from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap";
import ChildCell from "./ChildCell";

export default class Cell extends React.Component {
    constructor() {
        super();
        this.state = {
            children:[],
            isExpanded: false
        };

    }

    style = {}

    handleClick() {
        let foo;
        if(this.state) {
            foo=this.state.isExpanded;
        }else{
            foo=false;
        }
        this.setState({
            isExpanded: !foo
        })
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
        const { value,isExpanded,children } = this.props;

        const items = [];
        if(children.length==0) {
            items.push(<ChildCell item={child.props.value}></ChildCell>);
        }
        else {
            items.push(<tr onClick={this.handleClick.bind(this)}><td>{value}</td></tr>);
            if(this.state.isExpanded) {
                for(let child of children) {
                    items.push(<ChildCell item={child.props.value}></ChildCell>);
                }
            }
        }
        return (
            <div>
                {items}
            </div>
        );
    }
}