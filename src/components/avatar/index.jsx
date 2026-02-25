import AvatarImg from '../../assets/icons/user_icon.svg'
import styles from './styles.module.css'

function Avatar() {
  return (
    <div className={styles.avatar}>
      <img src={AvatarImg} alt="User Avatar" />
      <p>User logo</p>
    </div>
  );
}

export default Avatar;