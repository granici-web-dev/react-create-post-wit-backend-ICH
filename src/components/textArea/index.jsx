import React from 'react';
import styles from "./styles.module.css";

const TextArea = React.forwardRef(({ ...props }, ref) => {
  return <textarea ref={ref} {...props} className={styles.textArea} />;
});

export default TextArea;
