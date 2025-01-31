import "./Input.css";

function Input(props) {
  const { variant = "medium", ...rest } = props;
  return <input className={`input ${variant}`} {...rest} />;
}

export default Input;
