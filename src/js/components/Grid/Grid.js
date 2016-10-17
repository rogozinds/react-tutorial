import React,{Component,PropTypes} from "react"
import Item from "./Item";
import ReactDOM from "react-dom";
import {ListGroup, ListGroupItem} from "react-bootstrap";

export default class Grid extends React.Component {

    handleScroll(event) {
        this.setState({
            scrollTop: event.target.scrollTop
        })
    }
    componentDidMount() {
        var height=ReactDOM.findDOMNode(this).clientHeight;
        console.log(ReactDOM.findDOMNode(this));
        console.log(height)
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
        console.log("RENDER CALLED");
        this.items = [];
        var count = 0;
        const { data } = this.props;
        this.nItems=data.length;
        return <div style={{backgroundColor:'yellow',padding:50}}>
            <Item item={data[0]}></Item>
        </div>
        //const totalHeight = rowHeight * numRows;
        //const { availableHeight, scrollTop } = this.state;
        //const scrollBottom = scrollTop + availableHeight;
        //
        //const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - 20);
        //const endIndex = Math.min(numRows, Math.ceil(scrollBottom / rowHeight) + 20);
        //let index = startIndex;
        //while (index < endIndex) {
        //    this.items.push(<ListGroupItem  key={index}><Item
        //        number={index}/></ListGroupItem>);
        //    index++;
        //}
        //
        //return <div style={{ height: '100%', overflowY: 'scroll' }} onScroll={this.handleScroll.bind(this)}>
        //    <ListGroup style={{ paddingTop: (startIndex * rowHeight), pointerEvents: 'none', height: totalHeight }} onScroll={this.handleScroll.bind(this)}>
        //        {this.items}
        //    </ListGroup>
        //</div>
    }
}

Grid.propTypes = {
    data: React.PropTypes.array
};
Grid.defaultProps = {
    data: []
};