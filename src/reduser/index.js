const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_WEATHER':
      return state;
    case 'RECEIVE_WEATHER':
      return {
        ...state,
        ...action.payload,
      };
    case 'ERROR_WEATHER':
      return {
        ...state,
        ...action.error,
      };
    default:
      return state;
  }
};

export default reducer;
