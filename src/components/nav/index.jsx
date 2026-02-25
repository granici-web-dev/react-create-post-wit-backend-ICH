import nav from '../../data/nav';
import styles from './styles.module.css'

function Nav() {
  return (
    <ul className={styles.navList}>
      {nav.map((item) => (
        <li key={item.id}>
          <a href='#'>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;