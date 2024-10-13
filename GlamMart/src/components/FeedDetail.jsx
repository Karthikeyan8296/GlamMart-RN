import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import {React, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FeedDetailComponent = ({data}) => {
  //to get the complete screen width for anytype of device//
  const screenWidth = Math.round(Dimensions.get('window').width);
  const cardWidth = screenWidth / 2 - 20;
  //   console.log(cardWidth);

  const [isFavorite, setisFavorite] = useState(false);
  const toggleFavorite = () => {
    setisFavorite(!isFavorite);
  };

  return (
    <View
      className="p-4 rounded-xl bg-white flex items-center justify-center m-2"
      style={{width: cardWidth}}>
      {/* Favorites toggle */}
      <View className="flex items-end justify-end w-full">
        <TouchableOpacity onPress={toggleFavorite}>
          <Icon
            name={isFavorite ? 'favorite' : 'favorite-border'}
            size={26}
            color={isFavorite ? 'red' : 'black'}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={{uri: data?.mainImage?.asset?.url}}
        resizeMode="contain"
        className="w-32 h-52"
      />
      {/* Content for the items */}
      <View className="flex items-start justify-start space-y-1 w-full">
        <Text className="text-slate-800 font-semibold text-lg">
          {data?.title}
        </Text>
        <Text className="text-slate-600 font-normal text-sm">
          {data?.description}
        </Text>
      </View>

      <View className="flex items-start justify-start pt-2 space-y-1 w-full">
        <Text className="text-slate-950 font-semibold text-base">
          ${data?.price}/-
        </Text>
      </View>
    </View>
  );
};

export default FeedDetailComponent;
