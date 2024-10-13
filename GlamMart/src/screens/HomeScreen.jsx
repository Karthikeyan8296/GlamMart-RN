import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {React, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Profile} from '../assets';
import {fetchFeeds} from '../../sanity';
import {useDispatch, useSelector} from 'react-redux';
import {SET_FEEDS} from '../../context/actions/feedsAction';
import {FeedsComponent} from '../components';

const HomeScreen = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const handleSearchTerm = text => {
    setsearchTerm(text);
  };
  const [isloading, setisloading] = useState(false);

  //spl hook for dispatching from the redux store//
  const dispatch = useDispatch();
  //to access the state from redus store
  const feeds = useSelector(state => state.feeds);

  useEffect(() => {
    const getFeeds = async () => {
      setisloading(true);
      try {
        const res = await fetchFeeds();
        dispatch(SET_FEEDS(res));
        setisloading(false);
        console.log('Feeds from store: ', res);
      } catch (error) {
        console.log(error);
        // setisloading(false);
      }
    };
    getFeeds();
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-[#EBEAEF]">
      {/* Header View */}
      <View className="w-full flex-row items-center justify-between px-4 pt-6 pb-2">
        <Icon name="chevron-left" size={30} color="black" />
        <Text className="text-lg font-semibold text-slate-800">Glam Mart</Text>
        <Image className="w-12 h-12" source={Profile} resizeMode="cover" />
      </View>

      {/* Search view */}
      <View className="w-full flex-row items-center justify-between px-5 py-2 space-x-2 ">
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

      {/* Scrollable container */}
      <ScrollView className="flex-1 w-full h-full bg-white">
        {isloading ? (
          <View className=" flex-1 h-96 items-center justify-center">
            <ActivityIndicator size="large" color="red" />
          </View>
        ) : (
          <FeedsComponent value={feeds?.feeds} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
