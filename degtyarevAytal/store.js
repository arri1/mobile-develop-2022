import {createStore} from 'redux';

import burgerReducer from './src/redux/burgerReducer';

const store=createStore(burgerReducer);

export default store;
