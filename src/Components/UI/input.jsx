import css from "./input.module.css";

const Input = (props) => {
  return (
    <div className={css.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
