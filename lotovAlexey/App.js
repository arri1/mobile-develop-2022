import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigate from './navigation/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigate />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
