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
    parseValues(item,items) {
            let foo =this.parseValue(item);
            items.push(foo);
    }
    parseValue(item) {
        if(!this.hasArray(item)) {
            let id = _.uniqueId();
            let obj = <Cell key={id} value={item} isExpanded={false} isVisible={true}
                            children={[]}></Cell>;

            return obj
        } else {
            for (let key of Object.keys(item)) {
                const value = item[key];
                if (Array.isArray(value)) {
                    const children = [];
                    for (let child of value) {
                        children.push(this.parseValue(child));
                    }
                    let id = _.uniqueId();
                    let obj = <Cell key={id} value={key} isExpanded={false}
                                    isVisible={true}
                                    children={children}></Cell>;
                    return obj;
                } else {
                    let id = _.uniqueId();
                    let obj = <Cell key={id} value={value} isExpanded={false} isVisible={true}
                                    children={[]}></Cell>;

                    return obj
                }
            }
        }
    }
    render() {
        const { item,level,isVisible } = this.props;
        const items = [];

        //construct structure
        this.parseValues(item,items);
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