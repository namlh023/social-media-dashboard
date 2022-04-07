export const setToLS = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const getFromLS = (key) => {
  let value = window.localStorage.getItem(key);
  return value;
};
