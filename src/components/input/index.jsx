import Label from "../label";
import styles from './styles.module.css';

function Input({ placeholder, type = "text" }) {
  return (
    <div>
      <Label htmlFor={type}>
        {placeholder}
        <input type={type} placeholder={placeholder} />
      </Label>
    </div>
  );
}

export default Input;