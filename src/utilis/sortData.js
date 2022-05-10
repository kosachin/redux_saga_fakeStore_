export const sortDataUtility = (order, data) =>
  data
    .map((el) => el)
    .sort((a, b) => {
      a = a.name.firstname.toLowerCase();
      b = b.name.firstname.toLowerCase();
      if (a < b) {
        return order ? 1 : -1;
      } else if (a > b) {
        return order ? -1 : 1;
      }
      return 0;
    });
