import "./Checkbox.scss"

function Checkbox(props) {
  return (
    <label className="checkbox__container">
      <input
        type="checkbox"
        {...props}
      />
      <span className="checkbox__checkmark"></span>
    </label>
  );
}

export default Checkbox;