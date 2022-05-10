export const saveDataToLS = (data) => {
  console.log("outside if in LS");
  if (!localStorage.getItem("users")) {
    console.log("inside if in LS");
    localStorage.setItem("users", JSON.stringify(data));
  }
};
