import React,{Component,PropTypes} from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {Util} from "lodash";
import Cell from "./Cell"
export default class Item extends React.Component {
    //constructor() {
    //    super();
    //    this.state = {
    //        children:[],
    //        isExpanded: false
    //    };
    //
    //}

    calcVisibilityStyle(isVisible) {
        console.log(isVisible);
        if (isVisible) {
            return 'visible';
        }
        else {
            return 'hidden';
        }
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
            let obj = <Cell key={id} value={item} level={level} isExpanded={false} isVisible={true}
                            children={[]}></Cell>;

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
                    return <Cell key={id} value={key} level={level} isExpanded={false}
                                    isVisible={true}
                                    children={children}></Cell>;
                } else {
                    return <Cell key={id} value={value} level={Level} isExpanded={false} isVisible={true}
                                    children={[]}></Cell>;
                }
            }
        }
    }
    render() {
        const { item,level,isVisible } = this.props;
        const items = [];

        //construct structure
        this.parseValues(item,level,items);
        //for (let key of Object.keys(item)) {
        //    const value = item[key];
        //    let cellValue=this.parseValue(value);
        //    items.push(cellValue);
        //    //if (Array.isArray(value)) {
        //    //    const children =[];
        //    //    for (let i of value) {
        //    //        children.push(<Cell value={i} isExpanded={false} children={[]}></Cell>)
        //    //    }
        //    //    items.push(<Cell value={key} isExpanded={false} isVisible={true} children={children}></Cell>);
        //    //}
        //    //else {
        //    //    items.push(<Cell value={value} isExpanded={false} isVisible={true} children={[]}></Cell>);
        //    //}
        //}

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