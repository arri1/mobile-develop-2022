// import {createStore, combineReducers} from 'redux';
// import placeReducer from './src/Laba4/Reducers/placeReducer';

// const rootReducer = combineReducers({
//   places: placeReducer,
// });

// const configureStore = () => {
//   return createStore(rootReducer);
// };

// export default configureStore;



import {createStore} from 'redux';

import burgerReducer from './src/redux/burgerReducer';

// Passing burgerReducer to createStore
const store=createStore(burgerReducer);

export default store;
