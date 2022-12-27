import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './store';
import RootStackNavigation from './src/navigation/RootStackNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
