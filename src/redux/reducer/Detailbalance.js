const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const detailbalance = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BALANCE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'GET_BALANCE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'GET_BALANCE_FULFILLED':
      return {
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default detailbalance;
