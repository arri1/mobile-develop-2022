/* eslint-disable prettier/prettier */
import { configureStore, combineReducers } from 'redux';
import countReducer from '../reducers/countReducer';
const rootReducer = combineReducers(
{ count: countReducer }
);
const createStore = () => {
return configureStore(rootReducer);
};
export default createStore;
