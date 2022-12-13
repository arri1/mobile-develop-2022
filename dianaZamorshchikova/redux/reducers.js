import {SET_BG, SET_TAB_COLOR, SET_USERS} from './actions';

const initialState = {
  background: '#FOF7F4',
  tabColor: '55AAFF',
  users: {},
};

function colorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BG:
      return {...state, background: action.payload};
    case SET_TAB_COLOR:
      return {...state, tabColor: action.payload};
    case SET_USERS:
      return {...state, tabColor: action.payload};
    default:
      return state;
  }
}

export default colorReducer;
