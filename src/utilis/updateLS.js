export const updateLS = (data) => {
  localStorage.setItem("users", JSON.stringify(data));
};
