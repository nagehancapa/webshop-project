const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const product = action.payload;
      const exist = state.find((p) => p.id === product.id);

      if (!exist) {
        return [...state, { ...product, quantity: 1 }];
      } else {
        const updatedCart = state.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
        return updatedCart;
      }

    default:
      return state;
  }
};

export default cartReducer;
