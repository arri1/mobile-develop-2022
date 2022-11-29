export const SET_SKY_COLOR = 'SET_SKY_COLOR';

export const setSkyColor = skyColor => dispatch => {
  dispatch({
    type: SET_SKY_COLOR,
    payload: skyColor,
  });
};
