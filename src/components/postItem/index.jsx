import styles from './styles.module.css';
import Avatar from '../avatar';
import Button from '../button';

function PostItem({ post, deletePost }) {


  return (
    <div className={styles.postItem}>
      <div className={styles.postContent}>
        <div>
          <Avatar title={'User logo'} />
        </div>
        <div>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
      </div>
      <div className={styles.postActions}>
        <h4>{post.id}</h4>
        <Button title={'Delete'} onClick={() => deletePost(post.id)} className={styles.deleteBtn} />
      </div>
    </div>
  );
}

export default PostItem;