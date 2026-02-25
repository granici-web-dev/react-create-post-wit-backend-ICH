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

  const deletePost = async (id) => {
    console.log('Deleting id:', id);
    try {
      await axios.delete(`${BASE_URL}/posts/${id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const createPost = async (post) => {
    try {
      const response = await axios.post(`${BASE_URL}/posts`, post);
      setPosts((prevPosts) => [...prevPosts, response.data]);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={styles.post}>
      <PostList posts={posts} deletePost={deletePost} createPost={createPost} />
    </div>
  );
}

export default Post;