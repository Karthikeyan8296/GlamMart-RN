import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {React, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Profile} from '../assets';

const HomeScreen = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const handleSearchTerm = text => {
    setsearchTerm(text);
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-[#EBEAEF]">
      {/* Header View */}
      <View className="w-full flex-row items-center justify-between px-4 py-6">
        <Icon name="chevron-left" size={30} color="black" />
        <Text className="text-lg font-semibold text-slate-800">Glam Mart</Text>
        <Image className="w-12 h-12" source={Profile} resizeMode="cover" />
      </View>

      {/* Search view */}
      <View className="w-full flex-row items-center justify-between px-4 py-2 space-x-2 ">
        <View className="px-4 py-2 bg-white rounded-xl flex-1 flex-row items-center justify-center space-x-2">
          <Icon name="search" size={16} color="#7f7f7f" />
          <TextInput
            value={searchTerm}
            onChangeText={handleSearchTerm}
            placeholder="Search..."
            className="text-base font-normal text-[#555] flex-1 py-1"
          />
        </View>
        <TouchableOpacity className="bg-white px-3.5 py-3.5 rounded-xl">
          <Icons name="filter-plus-outline" size={24} color="#7f7f7f" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
