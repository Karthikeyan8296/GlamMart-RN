import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {FeedDetailComponent} from '../components';

const FeedsComponent = ({value}) => {
  return (
    <View className="flex-row items-center justify-center flex-wrap">
      {value?.length > 0 ? (
        <>
          {value?.map((item, index) => (
            <FeedDetailComponent key={index} data={item} />
          ))}
        </>
      ) : (
        <View className="w-full h-64 flex items-center justify-center">
          <ActivityIndicator size="large" color="red" />
          <Text className="text-black">No data</Text>
        </View>
      )}
      <Text>hello</Text>
    </View>
  );
};

export default FeedsComponent;
