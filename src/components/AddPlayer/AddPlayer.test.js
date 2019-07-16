import React from 'react';
import { shallow, mount } from 'enzyme';

import AddPlayer from './AddPlayer';

it('renders without crashing', () => {
    shallow(<AddPlayer />)
});

it('being called with proper name', () => {
    const onPlayerAdd = jest.fn();
    const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
    const nameInput = addPlayerComponent.find('input').first().getDOMNode();

    nameInput.value = 'Gosia';

    const form = addPlayerComponent.find('form');
    form.simulate('submit');
    
    expect(onPlayerAdd).toBeCalledWith('Gosia');
});