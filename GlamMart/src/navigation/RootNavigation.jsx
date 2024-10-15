import * as React from 'react';
import {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants';
import {HomeScreen, OnBoardingScreen, ProductScreen} from '../screens';
import {Provider} from 'react-redux';
import store from '../../context/store';
import {BottomTab} from '../components';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.ONBOARDING} component={OnBoardingScreen} />
        <Stack.Screen name={ROUTES.HOMESCREEN} component={HomeScreen} />
        <Stack.Screen name={ROUTES.PRODUCTSCREEN} component={ProductScreen} />
      </Stack.Navigator>
    </Provider>
  );
};

export default RootNavigation;
