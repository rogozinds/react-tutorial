import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import ChildCell from '../../../components/Grid/ChildCell';


describe('Component: Child Cell', ()=> {

    const minProps = {item: {name: "ref"}, level: 2};
    it('setup without problems', ()=> {

        const wrapper = shallow(<ChildCell {...minProps}/>);
        expect(wrapper.length).toEqual(1);
    });

    it('Check the message  without problems', ()=> {
        const wrapper = shallow(<ChildCell {...minProps}/>);
        expect(wrapper.find('tr').text()).toEqual('ref');
    });
})
