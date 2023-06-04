import {INCREASE_BURGER, DECREASE_BURGER} from './burgerActionTypes';

export const increaseBurgerAction = parameter => {
  return {
    type: INCREASE_BURGER,
    payload: parameter,
  };
};

export const decreaseBurgerAction = () => {
  return {
    type: DECREASE_BURGER,
  };
};
