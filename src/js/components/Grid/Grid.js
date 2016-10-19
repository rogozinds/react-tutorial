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
        //var height=ReactDOM.findDOMNode(this).clientHeight;
        //console.log(ReactDOM.findDOMNode(this));
        //console.log(height)
        //this.setState({
        //    availableHeight: height
        //})
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

    }
}

Grid.propTypes = {
    data: React.PropTypes.array
};
Grid.defaultProps = {
    data: []
};