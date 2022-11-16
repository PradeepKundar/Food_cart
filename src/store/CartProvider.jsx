import { useReducer } from "react";

import CartContext from "./Cart-context";

const defaultCartState = {
  items: [],
  totalAmunt: 0,
};

const cartReducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmunt + action.item.price * action.item.amount;
  }
  return {
    items: updatedItems,
    totalAmunt: updatedTotalAmount,
  };
};

const CartProvider = (props) => {
  const [cartState, dipatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemCartHandler = (item) => {
    dipatchCartAction({ type: "ADD", item: item });
  };

  const removeItemCartHandler = (id) => {
    dipatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmunt: cartState.totalAmunt,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
