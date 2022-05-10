export const getDataFromLS = () => {
  return JSON.parse(localStorage.getItem("users"));
};
