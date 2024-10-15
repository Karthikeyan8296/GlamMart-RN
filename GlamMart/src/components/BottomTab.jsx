import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../constants';

const BottomTab = ({activeScreen}) => {
  const navigation = useNavigation();
  return (
    <View className="absolute bottom-6 w-full px-8">
      <View className="bg-[#060410] rounded-2xl px-4 py-6 w-full flex-row items-center justify-around">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate(ROUTES.HOMESCREEN)}>
          <FontAwesome
            name="home"
            size={32}
            color={activeScreen === ROUTES.HOMESCREEN ? '#fff' : '#5C5576'}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcon
            name="format-list-bulleted"
            size={32}
            color={'#5C5576'}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcon name="shopping-cart" size={32} color={'#5C5576'} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <FontAwesome name="user" size={32} color={'#5C5576'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTab;
