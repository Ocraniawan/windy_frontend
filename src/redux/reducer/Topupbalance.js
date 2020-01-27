const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const topupbalance = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_TOPUPBALANCE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'POST_TOPUPBALANCE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'POST_TOPUPBALANCE_FULFILLED':
      return {
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default topupbalance;
