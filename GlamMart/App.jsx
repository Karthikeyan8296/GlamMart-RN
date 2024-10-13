import './gesture-handler';
import 'react-native-url-polyfill/auto';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './src/navigation';
import {Provider} from 'react-redux';
import store from './context/store';

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
