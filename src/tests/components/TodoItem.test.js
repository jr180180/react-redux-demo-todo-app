import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../../components/TodoItem';

test('should render TodoItem correctly', () => {
    const wrapper = shallow(<TodoItem />);
    expect(wrapper).toMatchSnapshot();
});

