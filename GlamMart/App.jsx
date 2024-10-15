import './gesture-handler';
import 'react-native-url-polyfill/auto';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './src/navigation';
import {Provider} from 'react-redux';
import store from './context/store';
import {BottomTab} from './src/components';
import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {ROUTES} from './src/constants';

//to get the active screen status//
const MyComponent = ({setActiveScreen}) => {
  const navigation = useNavigation();
  useEffect(() => {
    const main = navigation.addListener('state', () => {
      const currentScreen = navigation.getCurrentRoute().name;
      setActiveScreen(currentScreen);
      console.log(currentScreen);
    });
    return main;
  }, [navigation]);
};

function App() {
  const [ActiveScreen, setActiveScreen] = useState('');
  return (
    <NavigationContainer>
      <MyComponent setActiveScreen={setActiveScreen} />
      <Provider store={store}>
        <RootNavigation />
      </Provider>
      {ActiveScreen !== ROUTES.ONBOARDING && (
        <BottomTab activeScreen={ActiveScreen} />
      )}
    </NavigationContainer>
  );
}

export default App;
