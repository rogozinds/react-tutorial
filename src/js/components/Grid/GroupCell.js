import React,{Component,PropTypes} from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap";
import ChildCell from "./ChildCell";
import * as _ from "lodash";
import FontAwesome from "react-fontawesome"

export default class GroupCell extends React.Component {
    constructor() {
        super();
        this.state = {
            children: [],
            isExpanded: false
        };

    }

    style = {}

    handleClick() {
        let foo;
        if (this.state) {
            foo = this.state.isExpanded;
        } else {
            foo = false;
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
        const id = _.uniqueId();
        if (children.length == 0) {
            items.push(<ChildCell key={id} item={value}
                                  level={level}></ChildCell>);
        }
        else {
            const padding = 10 * level;
            const style = {paddingLeft: padding};
            items.push(<tr key={id}
                           onClick={this.handleClick.bind(this)}>
                <td style={style}>{value}</td>
            </tr>);
            if (this.state.isExpanded) {
                for (let child of children) {
                    let id = _.uniqueId();
                    let obj = <GroupCell key={id} value={child.props.value}
                                         level={child.props.level} isExpanded={false}
                                         isVisible={true}
                                         children={child.props.children}></GroupCell>;
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