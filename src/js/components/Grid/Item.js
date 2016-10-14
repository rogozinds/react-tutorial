import React,{Component,PropTypes} from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap";

export default class Item extends React.Component {
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
        const { item,level,isVisible,children } = this.props;
        const items = [];

        //construct structure
        for (let key of Object.keys(item)) {
            const value = item[key];
            if (Array.isArray(value)) {
                for (let i of value) {
                    children.push(<Item item={i}></Item>)
                    //if(this.state.isExpanded) {
                    //    cells.push(<Item item={i}></Item>)
                    //}
                }
                items.push(<Item item={{header:key}} isExpanded={false} isVisible={true} children={children}></Item>);
            }
            else {
                const color = "red";
                const cellStyle = {
                    backgroundColor: color,
                    visibility: this.calcVisibilityStyle(isVisible)
                }
                items.push(<Item item={{key:value}} isExpanded={false} isVisible={true} children={children}></Item>);
            }
        }
        //prepare rendering
        const cells=[];
        for (let foo of items) {
            cells.push(<tr onClick={this.handleClick.bind(foo)}>{foo.props.item["header"]}</tr>)
            if(foo.state&&foo.state.isExpanded) {
                for (let child of item.props.children) {
                    for (let key of Object.keys(child)) {
                        const value = child[key];
                        cells.push(<td>{value}</td>);
                    }
                }
            }
        }

        return <tr>
            {cells}
        </tr>
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