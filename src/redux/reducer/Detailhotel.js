const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const detailhotel = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL_HOTEL_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'GET_DETAIL_HOTEL_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'GET_DETAIL_HOTEL_FULFILLED':
      return {
        data: action.payload.data,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default detailhotel;
