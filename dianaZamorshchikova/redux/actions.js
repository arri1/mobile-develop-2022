export const SET_BG = 'SET_BG';
export const SET_TAB_COLOR = 'SET_TAB_COLOR';
export const SET_USERS = 'SET_USERS';

export const setBackground = background => dispatch => {
  dispatch({
    type: SET_BG,
    payload: background,
  });
};

export const setTabColor = tabColor => dispatch => {
  dispatch({
    type: SET_TAB_COLOR,
    payload: tabColor,
  });
};

export const setUsers = users => dispatch => {
  dispatch({
    type: SET_USERS,
    payload: users,
  });
};
