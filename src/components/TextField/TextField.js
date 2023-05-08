import "./TextField.scss";

function TextField(props) {
  const {
    id,
    type = "text",
    label,
    placeholder = props.label,
    name,
    component = "input",
    variant,
    ...otherProps
  } = props;

  const Input = component;
  let className = "text-field__input";
  if (component !== "input") {
    className = `text-field__input text-field__input--${component}`;
  }
  if(variant){
    className = className + ` text-field--${variant}`
  }
  return (
    <div className="text-field">
      <label htmlFor={id} className="text-field__label">
        {label}
      </label>
      <Input
        {...otherProps}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}

export default TextField;
