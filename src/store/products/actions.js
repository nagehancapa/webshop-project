import axios from "axios";

export const productsFetched = (products) => {
  return {
    type: "PRODUCTS_FETCHED",
    payload: products,
  };
};

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    );
    dispatch(productsFetched(response.data));
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
