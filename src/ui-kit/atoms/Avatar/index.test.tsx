import React from 'react';
import { Avatar } from './Avatar';
import { makeColorFromString, invertColor } from 'utils';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('testing <Avatar />', () => {
  it('renders without crashing', () => {
    shallow(<Avatar>Test</Avatar>);
  });

  it('matches snapshot', () => {
    const component = <Avatar>Test</Avatar>;
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('makes colors correctly', () => {
    const text = 'Test';
    const backgroundColor = makeColorFromString(text);
    const textColor = invertColor(backgroundColor);
    const component = shallow(<Avatar>{text}</Avatar>);
    expect(component).toHaveStyleRule('background', backgroundColor);
    expect(component).toHaveStyleRule('color', textColor);
  });

  it('displays inner text correctly', () => {
    const wrapper = shallow(<Avatar>leonid460</Avatar>);
    expect(wrapper.text()).toMatch('LE');
  });
});
