import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "../postList";
import styles from './styles.module.css';

const BASE_URL = 'https://699eb2fb78dda56d396b07a3.mockapi.io';

function Post() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return <div className={styles.post}>
    <PostList posts={posts} />
  </div>
}

export default Post;