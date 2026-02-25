import AvatarImg from '../../assets/icons/user_icon.svg'
import styles from './styles.module.css'

function Avatar({ title }) {
  return (
    <div className={styles.avatar}>
      <img src={AvatarImg} alt="User Avatar" />
      <p>{title}</p>
    </div>
  );
}

export default Avatar;