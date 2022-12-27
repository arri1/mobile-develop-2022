import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { Provider } from 'react-redux';
import { store } from './navigation/redux/store';
import { NavigationContainer } from '@react-navigation/native';

const App=() => {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <MainContainer/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;