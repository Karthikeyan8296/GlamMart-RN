import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants';
import {HomeScreen, OnBoardingScreen} from '../screens';
import {Provider} from 'react-redux';
import store from '../../context/store';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.ONBOARDING} component={OnBoardingScreen} />
        <Stack.Screen name={ROUTES.HOMESCREEN} component={HomeScreen} />
      </Stack.Navigator>
    </Provider>
  );
};

export default RootNavigation;
