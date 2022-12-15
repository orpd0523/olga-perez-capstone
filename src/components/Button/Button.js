import "./Button.scss";

function Button(props) {
  const { type = "button", children, color = "primary", ...otherProps } = props;
  return (
    <button className={`btn btn--${color}`} type={type} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
