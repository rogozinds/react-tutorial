import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import ChildCell from '../../../components/Grid/ChildCell';
import GroupCell from '../../../components/Grid/GroupCell';


describe('Component: GroupCell', ()=> {

    const minProps = {value: {name: "ref"}, level:0 ,children:[]};
    it('No children setup without problems', ()=> {

        const wrapper = shallow(<GroupCell {...minProps}/>);
        expect(wrapper.length).toEqual(1);
    });

     it('Two children setup without problems', ()=> {

        let children = [];
        children.push(<ChildCell {...minProps}  />)
        children.push(<ChildCell {...minProps} />)
        const wrapper = shallow(<GroupCell {...minProps}  children = {children} />);
         console.log(wrapper.html())
        //expect(wrapper.find('td').children().leng).toEqual(children.length);
    });
})
