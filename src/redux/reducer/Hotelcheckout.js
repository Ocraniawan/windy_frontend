const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const hotelcheckout = (state = initialState, action) => {
  switch (action.type) {
    case 'PUT_HOTELCHECKOUT_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'PUT_HOTELCHECKOUT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'PUT_HOTELCHECKOUT_FULFILLED':
      return {
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default hotelcheckout;
