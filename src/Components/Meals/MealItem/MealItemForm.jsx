import Input from "../../UI/input";
import css from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={css.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button>Add To Cart</button>
    </form>
  );
};

export default MealItemForm;
