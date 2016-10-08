import React from "react";
import Item from "./Item";
import ReactDOM from "react-dom";
import {ListGroup, ListGroupItem} from "react-bootstrap";
export default class ListViewOpt extends React.Component {

    style = {
        width:"500px"
    }
    createList() {

    }
    handleScroll(event) {
        console.log("FOO CONSOLE LOG");
        this.setState({
            scrollTop: event.target.scrollTop
        })
    }
    componentDidMount() {
        var height=ReactDOM.findDOMNode(this).clientHeight;
        this.setState({
            availableHeight: height
        })
    }
    constructor() {
        super();
        this.state={
            availableHeight:0,
            scrollTop:0
        };
    };

    render() {
        this.items = [];
        this.createList();
        var count = 0;
        const { numRows, rowHeight, renderRowAtIndex } = this.props
        const totalHeight = rowHeight * numRows;
        const { availableHeight, scrollTop } = this.state;
        const scrollBottom = scrollTop + availableHeight;

        const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - 20);
        const endIndex = Math.min(numRows, Math.ceil(scrollBottom / rowHeight) + 20);
        let index = startIndex;
        while (index < endIndex) {
            this.items.push(<ListGroupItem style={this.style} key={index}><Item
                number={index}/></ListGroupItem>);
            index++;
        }
        console.log("Render is done");
        return <div style={{ height: '100%', overflowY: 'scroll' }} onScroll={this.handleScroll.bind(this)}>
            <ListGroup style={{ paddingTop: (startIndex * rowHeight), pointerEvents: 'none', height: totalHeight }} onScroll={this.handleScroll.bind(this)}>
                {this.items}
            </ListGroup>
        </div>
    }
}