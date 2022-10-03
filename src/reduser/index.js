const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_WEATHER':
      return {
        isLoading: true,
      };

    case 'RECEIVE_WEATHER':
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case 'ERROR_WEATHER':
      return {
        ...state,
        ...action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
