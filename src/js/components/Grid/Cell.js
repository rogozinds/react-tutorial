import React,{Component,PropTypes} from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {Util} from "lodash";
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
        const { value, level, isExpanded,children } = this.props;

        const items = [];
        if(children.length==0) {
            items.push(<ChildCell item={value} level={level}></ChildCell>);
        }
        else {

            //let obj = <Cell key={id} value={value} isExpanded={false} isVisible={true} children={children}></Cell>;
            const padding=10*level;
            const style={paddingLeft:padding};
            items.push(<tr style={style} onClick={this.handleClick.bind(this)}><td>{value}</td></tr>);
            if(this.state.isExpanded) {
                for(let child of children) {
                    let id = _.uniqueId();
                    let obj = <Cell key={id} value={child.props.value} level={child.props.level} isExpanded={false} isVisible={true} children={child.props.children}></Cell>;
                    items.push(obj);
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