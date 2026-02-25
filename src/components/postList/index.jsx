import Button from "../button";
import PostItem from "../postItem";
import styles from './styles.module.css';

function PostList({ posts, deletePost, createPost }) {
  return (
    <div className={styles.postList}>
      <h2 style={{ marginBottom: '2rem' }}>List of posts</h2>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} deletePost={deletePost} createPost={createPost} />
      ))}
      <div className={styles.buttonDiv}>
        <Button className={styles.nextBtn} title={'Next'} />
      </div>
    </div>
  );
}

export default PostList;