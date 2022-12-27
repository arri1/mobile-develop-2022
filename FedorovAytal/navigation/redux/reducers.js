import {SET_COLOR} from './actions';

const initialState = {
  lab1Color: '#87CEEB',
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR:
      return {...state, lab1Color: action.payload};
    default:
      return state;
  }
};

export default colorReducer;