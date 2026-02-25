import Label from "../label";
import styles from './styles.module.css';

function TextArea({ placeholder = 'Text content', title = 'Text Content' }) {
  return (
    <Label htmlFor={'text'}>{title}
      <textarea placeholder={placeholder} id={'text'} />
    </Label>
  );
}

export default TextArea;