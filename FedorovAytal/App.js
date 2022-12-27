import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { Provider } from 'react-redux';
import { store } from './navigation/redux/store';

const App=() => {
  return(
    <Provider store={store}>
        <MainContainer/>
    </Provider>
  );
}

export default App;