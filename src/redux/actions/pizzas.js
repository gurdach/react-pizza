import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload: payload,
});

export const fetchPizza = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(`http://localhost:3000/pizzas${category == null ? '' : '?category=' + category + '&sort=' + sortBy}`).then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
  isLoaded: false,
});
