import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CardBody from './';

configure({ adapter: new Adapter() });

describe('<CardBody />', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      addNewText: jest.fn(),
      card: { id: "num", title: "str", text: "str", editModeFlag: false, chooseСardFlag: false }
    };
    wrapper = shallow(<CardBody {...props} />);
  });

  it('should render CardBody', () => {
    expect(wrapper).toBeDefined();
  });

  it('should contain <p> if edit mode is OFF', () => {
    wrapper.setProps({ card: { ...props, editModeFlag: false } });
    expect(wrapper.find('p.card_text').length).toBe(1);
  });

  it('should contain <textarea> if edit mode is ON', () => {
    wrapper.setProps({ card: { ...props, editModeFlag: true } });
    expect(wrapper.find('textarea.card_textarea')).toHaveLength(1);
  });

  it('should call addNewText function', () => {
    wrapper.setProps({ card: { ...props, editModeFlag: true } });
    wrapper.find('textarea.card_textarea').simulate('change', { target: { value: 'value' } });
    expect(props.addNewText).toHaveBeenCalled();
  });

});