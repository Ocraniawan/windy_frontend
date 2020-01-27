export const hotelguestdate = date => {
  return {
    type: 'HOTEL_GUEST_DATE',
    date,
  };
};

export const hotelguestduration = duration => {
  return {
    type: 'HOTEL_GUEST_DURATION',
    duration,
  };
};

export const hotelguestname = (title, first_name, last_name) => {
  return {
    type: 'HOTEL_GUEST_NAME',
    title,
    first_name,
    last_name,
  };
};
