import Logo from '../../assets/images/logo.svg'
import Nav from '../nav';
import styles from './styles.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <img src={Logo} alt="MECK Logo" />
        <nav>
          <Nav />
        </nav>
      </div>
    </header>
  );
}

export default Header;
