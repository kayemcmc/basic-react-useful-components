import React from 'react';
import Toggle from './Toggle';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';

describe('Toggle', () => {
  // it('renders a label', () => {
  //     const component = mount(<Toggle label="Label" />);
  //     expect(
  //         component
  //             .find('.class')
  //             .first()
  //             .text()
  //     ).toEqual('Label');
  // });
  it('renders toggle correctly', () => {
    const component = renderer.create(<Toggle />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
