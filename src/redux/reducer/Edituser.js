const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const edituser = (state = initialState, action) => {
  switch (action.type) {
    case 'PUT_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'PUT_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'PUT_USER_FULFILLED':
      return {
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default edituser;
