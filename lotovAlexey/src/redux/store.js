import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import colorReducer from './reducers';

const rootReducer = combineReducers({colorReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
