const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOKEN_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'GET_TOKEN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'GET_TOKEN_FULFILLED':
      return {
        data: action.payload.data,
        isLoading: false,
        isError: false,
      };
    case 'GET_LOGOUT_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'GET_LOGOUT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'GET_LOGOUT_FULFILLED':
      return {
        data: action.payload.data,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default login;
