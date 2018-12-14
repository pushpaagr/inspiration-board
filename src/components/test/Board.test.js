import React from 'react';
import Board from '../Board';
import { shallow, mount } from 'enzyme';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow( <Board />);

    expect(wrapper).toMatchSnapshot();
  });

  it('matches the deep snapshot', () => {
    const wrapper = mount( <Board />);

    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

});
