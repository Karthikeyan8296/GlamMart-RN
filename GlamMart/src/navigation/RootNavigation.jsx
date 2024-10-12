import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants';
import {HomeScreen, OnBoardingScreen} from '../screens';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.ONBOARDING} component={OnBoardingScreen} />
      <Stack.Screen name={ROUTES.HOMESCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
