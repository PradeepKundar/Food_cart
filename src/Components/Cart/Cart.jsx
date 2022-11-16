import Modal from "../UI/Modal";
import css from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={css["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={css.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={css.actions}>
        <button className={css["button--alt"]} onClick={props.onClose}>
          {" "}
          Close
        </button>
        <button className={css.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
