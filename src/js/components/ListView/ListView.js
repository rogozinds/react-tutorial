import React from "react";
import Item from "./Item";
import {ListGroup, ListGroupItem} from "react-bootstrap";
export default class ListView extends React.Component {

    style = {
        width:"500px"
    }
    createList(){
        var count =0;
        while(count<this.props.count){
            this.items.push(<ListGroupItem style={this.style} key={count}><Item number={count}/></ListGroupItem>);
            count++;
        }
    }
    constructor() {
        super();
        this.items=[];


    };
    render(){
        this.createList();
        return <div>
            <ListGroup>
               {this.items}
            </ListGroup>
        </div>
    }
}