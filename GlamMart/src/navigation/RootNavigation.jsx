import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants';
import {HomeScreen} from '../screens';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.HOMESCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
