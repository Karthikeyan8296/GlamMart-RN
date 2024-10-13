//we are sending the feeds//
export const SET_FEEDS = feeds => {
  //we are returing an object that will be using in reducers//
  return {
    type: 'SET_FEEDS',
    feeds: feeds,
  };
};

//we are having a null state//
export const SET_FEEDS_NULL = () => {
  //we are returing an object that will be using in reducers//
  return {
    type: 'SET_FEEDS_NULL',
    feeds: null,
  };
};
