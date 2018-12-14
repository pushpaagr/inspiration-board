import React from 'react';
import Card from '../Card';
import { shallow, mount } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(
      <Card
      text="this is test text string"
      emoji="Take a nap"
      />);

      expect(wrapper).toMatchSnapshot();
    });


    test('renders without crashing even with no text or emoji data', () => {

      const wrapper = shallow(
        <Card
        text=""
        emoji=""
        />);

        expect(wrapper).toMatchSnapshot();
      });

      // it('matches the deep snapshot', () => {
      //   const wrapper = mount(
      //     <Card
      //     text="this is test text string2"
      //     emoji="Take a nap2"
      //     />);
      //
      //   expect(wrapper).toMatchSnapshot();
      //   wrapper.unmount();
      // });





    });
