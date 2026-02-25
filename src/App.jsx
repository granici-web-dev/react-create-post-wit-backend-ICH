import Header from "./components/header";
import Post from "./components/post";
import PostForm from "./components/postForm";
import './App.css'

function App() {


  return (
    <>
      <Header />
      <div className={'container'}>
        <Post />
        <PostForm />
      </div>
    </>
  )
}

export default App
