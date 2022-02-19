import React from 'react';
import { shallow, configure } from 'enzyme';
import Header from '../../components/Header';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('h1').length).toBe(1);
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
