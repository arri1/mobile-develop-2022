export const SET_COLOR = 'SET_COLOR';

export const setColor = lab1Color => dispatch => {
  dispatch({
    type: SET_COLOR,
    payload: lab1Color,
  });
};