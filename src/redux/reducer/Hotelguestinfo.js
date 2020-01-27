const initialState = {
  date: '',
  duration: '',
  title: '',
  first_name: '',
  last_name: '',
};

const guest = (state = initialState, action) => {
  switch (action.type) {
    case 'HOTEL_GUEST':
      return {
        ...state,
        date: action.date,
        duration: action.duration,
        title: action.title,
        first_name: action.first_name,
        last_name: action.last_name,
      };
    default:
      return state;
  }
};

export default guest;
