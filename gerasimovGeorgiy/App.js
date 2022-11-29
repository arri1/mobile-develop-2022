import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lab1 from './screens/Lab1';
import Memo from './screens/Memo';
import {Provider} from 'react-redux';
import {store} from './store/rootStore';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Lab1" component={Lab1} />
          <Tab.Screen name="Memo" component={Memo} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
