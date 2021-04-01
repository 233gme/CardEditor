import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Card } from '.';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

configure({ adapter: new Adapter() });

const mockHistory = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistory,
  }),
}));

describe('<Card />', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      card: { id: 'num', title: 'str', text: 'str', editModeFlag: false, chooseСardFlag: false },
      onSaveChanges: jest.fn(),
      view: false,
    };
    wrapper = shallow(<Card {...props} />);
  });

  it('should render Card', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should render CardHeader', () => {
    expect(wrapper.find(CardHeader)).toHaveLength(1);
  });

  it('should render CardBody', () => {
    expect(wrapper.find(CardBody)).toHaveLength(1);
  });

  it('should call history push', () => {
    wrapper.find('div').simulate('doubleclick');
    expect(mockHistory).toHaveBeenCalled();
    expect(props.onSaveChanges).toHaveBeenCalled();
  });

  it('should call selectItem', () => {
    wrapper.find(CardHeader).dive().find('input.card_checbox').simulate('click');
    expect(props.onSaveChanges).toHaveBeenCalled();
  });

  it('should call editModeOn', () => {
    wrapper.setProps({ ...props, onView: false, card: { ...props, editModeFlag: false } });
    wrapper.find(CardHeader).dive().find('button').simulate('click');
    expect(props.onSaveChanges).toHaveBeenCalled();
  });

  it('should call abortChanges', () => {
    wrapper.setProps({ ...props, card: { ...props, editModeFlag: true } });
    wrapper.find(CardHeader).dive().find('div.card_title__btn_block').childAt(0).simulate('click');
    expect(props.onSaveChanges).toHaveBeenCalled();
  });

  it('should call saveChenges', () => {
    wrapper.setProps({ ...props, card: { ...props, editModeFlag: true } });
    wrapper.find(CardHeader).dive().find('div.card_title__btn_block').childAt(1).simulate('click');
    expect(props.onSaveChanges).toHaveBeenCalled();
  });

  it('should call addNewText', () => {
    wrapper.setProps({ ...props, card: { ...props, editModeFlag: true } });
    wrapper.find(CardBody).dive().find('textarea.card_textarea').simulate("change", { target: { value: "checked" } });
    expect(props.onSaveChanges).toHaveBeenCalled();
  });

});