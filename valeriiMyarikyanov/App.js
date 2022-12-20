import {TabNavigation} from './src/Navigation/TabNavigation';
import bcrypt from 'react-native-bcrypt';
import isaac from 'isaac';
import store from './src/Redux/Store';
import {Provider} from 'react-redux';

// Setting RNG
bcrypt.setRandomFallback(len => {
  const buf = new Uint8Array(len);
  return buf.map(() => Math.floor(isaac.random() * 256));
});

const App = () => {
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
};

export default App;
