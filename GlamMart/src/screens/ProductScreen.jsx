import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/MaterialIcons';

const ProductScreen = ({route}) => {
  //by this we are getting the values of ID as params//
  const {_id, title, img} = route.params;
  // console.log(img);

  const feeds = useSelector(state => state.feeds);
  const [data, setdata] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    if (feeds) {
      setdata(feeds?.feeds.filter(item => item._id === _id)[0]);
      console.log(feeds?.feeds.filter(item => item._id === _id)[0]);
      setInterval(() => {
        setisLoading(false);
      }, 1000);
    }
  }, []);

  //screen height//
  const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View className="flex-1 items-start justify-start bg-[#ebeaef] space-y-4">
      {isLoading ? (
        <View className="w-full flex-1 h-full justify-center items-center">
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <>
          <SafeAreaView className="w-full">
            {/* header section */}
            <View className="flex-row items-center justify-between px-4 py-4 pt-6 w-full">
              <TouchableOpacity>
                <Icon name="chevron-left" size={32} color={'#555'} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icons name="shopping-cart" size={32} color={'#555'} />
              </TouchableOpacity>
            </View>

            {/* Image section */}
            <View
              className="w-full flex items-center justify-center relative"
              style={{height: screenHeight / 2}}>
              <Image
                source={{uri: data?.bgImgae?.asset?.url}}
                resizeMode="cover"
                className="w-full h-full opacity-60"
              />
              <View className="w-full h-full absolute top-0 left-0 items-center justify-center">
                <Image
                  source={{uri: data?.mainImage?.asset?.url}}
                  resizeMode="contain"
                  className="w-full h-full"
                />
              </View>
            </View>

            {/* Category section */}
          </SafeAreaView>
        </>
      )}
    </View>
  );
};

export default ProductScreen;
