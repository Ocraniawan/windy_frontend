const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'REGISTER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'REGISTER_FULFILLED':
      return {
        data: action.payload.data,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default register;
