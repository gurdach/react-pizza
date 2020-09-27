import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload: payload,
});

export const fetchPizza = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  console.log(sortBy)
  axios
    .get(
      `http://localhost:3000/pizzas${
        category == null
          ? "" + "?_sort=" + sortBy.type + "&_order=" + sortBy.order
          : "?category=" + category + "&_sort=" + sortBy.type + "&_order=" + sortBy.order
      }`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
  isLoaded: false,
});
