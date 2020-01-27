const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const historynotbooked = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HISTORY_NOTBOOKED_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'GET_HISTORY_NOTBOOKED_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'GET_HISTORY_NOTBOOKED_FULFILLED':
      return {
        data: action.payload.data,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default historynotbooked;
