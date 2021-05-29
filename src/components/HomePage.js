import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../store/products/actions";
import { getAllProducts } from "../store/products/selectors";
import { addToChart } from "../store/cart/actions";
import { amountOfItemsInCart } from "../store/cart/selectors";

import ProductCard from "./ProductCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector(getAllProducts);
  const amountItemsInCart = useSelector(amountOfItemsInCart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  function onAddClick(product) {
    dispatch(addToChart(product));
    console.log("trying to add product", product);
  }

  const renderProducts = () => {
    return reduxProducts.map((product) => (
      <ProductCard
        key={product.id}
        {...product}
        onAddClick={() => onAddClick(product)}
      />
    ));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 80,
          marginLeft: 80,
        }}
      >
        <h1>products page</h1>
        <h3>my cart: {amountItemsInCart}</h3>
      </div>
      {!reduxProducts.length ? <p>Loading...</p> : renderProducts()}
    </div>
  );
};

export default HomePage;
