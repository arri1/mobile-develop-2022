import {SET_SKY_COLOR} from './actions';

const initialState = {
  skyColor: '#87CEEB',
};

function colorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SKY_COLOR:
      return {...state, skyColor: action.payload};
    default:
      return state;
  }
}

export default colorReducer;
