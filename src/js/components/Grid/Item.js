import React,{Component,PropTypes} from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap";
import * as _ from "lodash";
import GroupCell from "./GroupCell"
export default class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            children:[],
            isExpanded: false
        };

    }

    hasArray(item) {
        for (let key of Object.keys(item)) {
            const value = item[key];
            if (Array.isArray(value)) {
                return true;
            }
        }
        return false;
    }
    parseValues(item,level,items) {
            let foo =this.parseValue(item,level);
            items.push(foo);
    }
    parseValue(item,level) {
        if(!this.hasArray(item)) {
            let id = _.uniqueId();
            let obj = <GroupCell key={id} value={item} level={level} isExpanded={false} isVisible={true}
                                 children={[]}></GroupCell>;
            return obj
        } else {
            for (let key of Object.keys(item)) {
                const value = item[key];
                let id = _.uniqueId();
                if (Array.isArray(value)) {
                    const children = [];
                    for (let child of value) {
                        children.push(this.parseValue(child,level+1));
                    }
                    return <GroupCell key={id} value={key} level={level} isExpanded={false}
                                      isVisible={true}
                                      children={children}></GroupCell>;
                } else {
                    return <GroupCell key={id} value={value} level={Level} isExpanded={false} isVisible={true}
                                      children={[]}></GroupCell>;
                }
            }
        }
    }
    render() {
        const { item,level,isVisible } = this.props;
        const items = [];

        //construct structure
        this.parseValues(item,level,items);
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
    isExpanded: false
};