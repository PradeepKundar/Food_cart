import React from "react";
import css from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={css.header}>
        <h1>ReactMeals</h1>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={css["main-image"]}>
        <img src={mealsImage} alt="A table full of meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
