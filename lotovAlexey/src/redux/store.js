import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import colorReducer from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({colorReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
