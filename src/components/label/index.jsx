import styles from './styles.module.css';

function Label(params) {
  return <label htmlFor={params.htmlFor}>{params.children}</label>;
}

export default Label;