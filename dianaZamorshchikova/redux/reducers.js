import {SET_BG, SET_TAB_COLOR} from './actions';

const initialState = {
  background: '#FOF7F4',
  tabColor: '55AAFF'
};

function colorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BG:
      return {...state, background: action.payload};
    case SET_TAB_COLOR:
      return {...state, tabColor: action.payload};
    default:
      return state;
  }
}

export default colorReducer;
