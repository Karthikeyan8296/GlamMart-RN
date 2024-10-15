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
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../constants';
import {addtocart} from '../../context/actions/cartActions';

const ProductScreen = ({route}) => {
  //by this we are getting the values of ID as params//
  const {_id, title, img} = route.params;
  // console.log(img);

  //we used this to get the data from feeds//
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
  }, [feeds, cartItems]);

  const cartItems = useSelector(state => state.cartItems);

  const [isFavorite, setisFavorite] = useState(false);
  const toggleFavorite = () => {
    setisFavorite(!isFavorite);
  };

  const [Qty, setQty] = useState(1);
  const handleQty = actions => {
    const newQty = Qty + actions;
    //this will set the user to dont run beyond the one!//
    setQty(newQty >= 1 ? newQty : 1);
  };

  const navigation = useNavigation();

  //screen height//
  const screenHeight = Math.round(Dimensions.get('window').height);

  const dispatch = useDispatch();
  const handlePressCart = () => {
    dispatch(addtocart({data: data, Qty: Qty}));
    setTimeout(() => {}, 100);
  };

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
              <TouchableOpacity onPress={() => navigation.goBack()}>
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
                  className="w-80 h-80"
                />
              </View>
            </View>
            {/* Category section */}
            <View className="w-full flex-row items-center justify-evenly mb-2 mt-5">
              {data?.categories &&
                data?.categories?.length > 0 &&
                data?.categories.map(value => (
                  <View
                    className="w-24 items-center justify-evenly p-2 rounded-xl bg-white"
                    key={value._id}>
                    <Image
                      source={{uri: value?.mainImage?.asset?.url}}
                      resizeMode="contain"
                      className="w-10 h-10"
                    />
                    <Text className="font-semibold text-gray-500">
                      {value.title}
                    </Text>
                  </View>
                ))}
            </View>
          </SafeAreaView>

          {/* Bottom section */}
          <View className="w-full flex-1 bg-white rounded-t-[36px] py-6 px-12 space-y-4">
            <View className="w-full items-center justify-between flex-row">
              <View>
                <Text className="text-black font-semibold text-xl">
                  {data?.title}
                </Text>
                <Text className=" text-stone-700">
                  {data?.shortDescription}
                </Text>
              </View>
              <TouchableOpacity onPress={toggleFavorite}>
                <Icons
                  name={isFavorite ? 'favorite' : 'favorite-border'}
                  size={26}
                  color={isFavorite ? 'red' : 'black'}
                />
              </TouchableOpacity>
            </View>

            <View className="w-full flex-row items-center justify-between">
              <Text className="text-black font-extrabold text-xl">
                ${data?.price}/-
              </Text>

              <View className="flex-row items-center justify-center space-x-4 rounded-xl border border-gray-300 px-4 py-1">
                <TouchableOpacity onPress={() => handleQty(-1)}>
                  <Text className="text-xl font-bold text-gray-900">-</Text>
                </TouchableOpacity>
                <Text className="text-xl font-bold text-gray-900">{Qty}</Text>
                <TouchableOpacity onPress={() => handleQty(+1)}>
                  <Text className="text-xl font-bold text-gray-900">+</Text>
                </TouchableOpacity>
              </View>

              {cartItems?.cart?.filter(item => item?.data?._id === data?._id)
                ?.length > 0 ? (
                <TouchableOpacity
                  activeOpacity={0.8}
                  className=" h-14 rounded-xl bg-black items-center justify-center">
                  <Text className="text-white text-xl font-semibold">
                    Added
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={handlePressCart}
                  activeOpacity={0.8}
                  className="px-4 py-2 rounded-xl bg-black items-center justify-center">
                  <Text className="text-white text-lg font-semibold">Cart</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default ProductScreen;
