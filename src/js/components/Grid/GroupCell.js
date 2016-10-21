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

    createExpandIcon( level) {
        const margin = 10 * level;
        let expandIcon;
        if (this.state.isExpanded) {
            expandIcon = "caret-down"
        }
        else {
            expandIcon = "caret-right";
        }
        return (<FontAwesome
            name={expandIcon}
            style={{ marginLeft: margin,textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />);
    }

    render() {
        const { value, level, children } = this.props;

        const items = [];
        const id = _.uniqueId();
        if (children.length == 0) {
            items.push(<ChildCell key={id} item={value}
                                  level={level}></ChildCell>);
        }
        else {
            const style = {paddingLeft: "10px"};
            const expandIcon = this.createExpandIcon(this.state.isExpanded, level);
            items.push(<tr key={id}
                           onClick={this.handleClick.bind(this)}>
                {expandIcon}
                <td style={style}>{value}</td>
            </tr>);
            if (this.state.isExpanded) {
                for (let child of children) {
                    let id = _.uniqueId();
                    let obj = <GroupCell key={id} value={child.props.value}
                                         level={child.props.level}
                                         isExpanded={false}
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