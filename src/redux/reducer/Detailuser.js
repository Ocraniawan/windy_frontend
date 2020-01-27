const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'GET_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'GET_USER_FULFILLED':
      return {
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default user;
