import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CardHeader from './';
import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

configure({ adapter: new Adapter() });

describe('<CardHeader />', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      abortChanges: jest.fn(),
      addNewText: jest.fn(),
      card: { id: "num", title: "str", text: "str", editModeFlag: false, chooseСardFlag: false },
      editModeOn: jest.fn(),
      onView: false,
      saveChenges: jest.fn(),
      selectItem: jest.fn(),
    };
    wrapper = shallow(<CardHeader {...props} />);
  });

  it('should rander CardHeader', () => {
    expect(wrapper).toBeDefined();
  });

  it('should contain div', () => {
    expect(wrapper.find('div.card_title')).toHaveLength(1);
  });

  it('should contain <p> and <input> if edit mode is OFF', () => {
    wrapper.setProps({ card: { editModeFlag: false } });
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('input.card_checbox')).toHaveLength(1);
  });

  it('should contain edit button if view and edit mode is OFF', () => {
    wrapper.setProps({ onView: false, card: { editModeFlag: false } });
    expect(wrapper.contains(<button onClick={props.editModeOn}><AiFillEdit /></button>)).toEqual(true);
  });

  it('should contain <input> anb two <buttons> if edit mode is OFF', () => {
    wrapper.setProps({ card: { editModeFlag: true } });
    expect(wrapper.find('input[name="title"]')).toHaveLength(1);
    expect(wrapper.contains(
      <div className='card_title__btn_block'>
        <button onClick={props.abortChanges}><AiOutlineClose /></button>
        <button onClick={props.saveChenges}><AiOutlineCheck /></button>
      </div>
    )).toEqual(true);
  });

  it('should call editModeOn function', () => {
    wrapper.setProps({ onView: false, card: { editModeFlag: false } });
    wrapper.find('button').simulate('click');
    expect(props.editModeOn).toHaveBeenCalled();
  });

  it('should call abortChanges function', () => {
    wrapper.setProps({ card: { editModeFlag: true } });
    wrapper.find('div.card_title__btn_block').childAt(0).simulate('click');
    expect(props.abortChanges).toHaveBeenCalled();
  });

  it('should call addNewText function', () => {
    wrapper.setProps({ card: { editModeFlag: true } });
    wrapper.find('input[name="title"]').simulate('change', {
      target: { value: 'text' }
    });
    expect(props.addNewText).toHaveBeenCalled();
  });

  it('should call saveChenges function', () => {
    wrapper.setProps({ card: { editModeFlag: true } });
    wrapper.find('div.card_title__btn_block').childAt(1).simulate('click');
    expect(props.saveChenges).toHaveBeenCalled();
  });

  it('should call editModeOn function', () => {
    wrapper.setProps({ onView: false, card: { editModeFlag: false } });
    wrapper.find('button').simulate('click');
    expect(props.editModeOn).toHaveBeenCalled();
  });

});