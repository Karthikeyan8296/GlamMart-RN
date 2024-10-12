import {View, Text, Image, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import {Screen1, Screen2, Screen3, Brand} from '../assets';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkOnboardingstatus = async () => {
      const value = await AsyncStorage.getItem('@onboarding_complete');
      console.log(value);
      if (value !== null && value === 'true') {
        navigation.replace(ROUTES.HOMESCREEN);
      } else {
        setLoading(false);
      }
    };
    checkOnboardingstatus();
  }, [navigation]);

  const handleOnBoardingComplete = async e => {
    console.log('Triggered:', e);
    if (e === 2) {
      try {
        await AsyncStorage.setItem('@onboarding_complete', 'true');
        navigation.navigate(ROUTES.HOMESCREEN);
      } catch (error) {
        console.log('Error on storing onBoarding status: ', error);
      }
    }
  };

  if (loading) {
    // Show a loader while AsyncStorage check is in progress //
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Swiper
        paginationStyle={{bottom: '5%'}}
        onIndexChanged={handleOnBoardingComplete}>
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
      </Swiper>
    </View>
  );
};

export const ScreenOne = () => {
  return (
    <View className="flex-1 items-center justify-center relative">
      <Image source={Screen1} className="w-full h-full" resizeMode="cover" />
      <View className="absolute w-30 h-auto items-center justify-center p-2 left-10 top-20">
        <Image source={Brand} className="h-32 w-32" resizeMode="contain" />
        <Text className="text-lg text-red-600 font-semibold">Glam Mart</Text>
      </View>
    </View>
  );
};
export const ScreenTwo = () => {
  return (
    <View className="flex-1 space-y-6 items-center justify-start bg-white">
      <Image source={Screen2} className="w-full h-[75%]" resizeMode="cover" />
      <View className="flex items-center justify-center px-6">
        <Text className="text-2xl font-semibold tracking-wider text-[#555]">
          Find your Beauty Products
        </Text>
        <Text className="text-xl tracking-wider text-[#777] text-center">
          Beauty begins the moment you decide to be yourself
        </Text>
      </View>
    </View>
  );
};
export const ScreenThree = () => {
  return (
    <View className="flex-1 space-y-6 items-center justify-start bg-white">
      <Image source={Screen3} className="w-full h-[75%]" resizeMode="cover" />
      <View className="flex items-center justify-center px-6">
        <Text className="text-2xl font-semibold tracking-wider text-[#555]">
          Best Product at Low price
        </Text>
        <Text className="text-xl tracking-wider text-[#777] text-center">
          Your beauty matters, so we are there for you to shine youself
        </Text>
      </View>
    </View>
  );
};

export default OnBoardingScreen;
