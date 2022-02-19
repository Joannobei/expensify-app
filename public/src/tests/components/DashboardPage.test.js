import React from 'react';
import { shallow, configure } from 'enzyme';
import Header from '../../components/Header';
import Adapter from 'enzyme-adapter-react-16';
import ExpenseDashboardPage from '../../components/DashboardPage';

configure({ adapter: new Adapter() });

test('should render Header correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});