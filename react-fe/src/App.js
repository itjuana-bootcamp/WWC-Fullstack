import "./styles/App.css";
import NavBar from "./components/NavBar";
import FeaturedPost from "./components/FeaturedPost";
import ListPost from "./components/ListPost";
import posts from "./resources/posts";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { JoinOurTeam } from "./pages/JoinOurTeam";
import { ContactUs } from "./pages/ContactUs";
import { HomePage } from "./pages/HomePage";
import CreatePost from "./pages/CreatePost";
import { DetailPostPage } from "./pages/DetailPostPage";
import { Error } from "./components/Error";
import { getAllPost, createPost, updatePost, deletePost } from "./api/apiPost";

function App() {
  const navigate = useNavigate();
  const [allPosts, setAllPosts] = useState([]);
  const [postId, setPostId] = useState();

  const fetchPosts = async () => {
    const res = await getAllPost();
    setAllPosts(res);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const findPostById = (id) => {
    return allPosts[id];
  };

  const handleOnSave = async (post) => {
    console.log(post);
    if (postId) {
      const res = await updatePost(post._id, post);
      const copyOfPosts = allPosts.map((item) =>
        item._id === res._id ? post : item
      );
      setAllPosts(copyOfPosts);
    } else {
      const res = await createPost(post);
      setAllPosts([...allPosts, post]);
    }
    navigate("/");
  };

  const handleOnEdit = (postId) => {
    console.log(postId);
    setPostId(postId);
    navigate("/create-new-post");
  };
  const onDelete = async (id) => {
    const res = await deletePost(id);

    const copyOfPosts = allPosts.filter((item) => item._id !== id);
    setAllPosts(copyOfPosts);
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          index
          element={
            <HomePage
              posts={allPosts}
              onEdit={handleOnEdit}
              onDelete={onDelete}
            />
          }
        />
        <Route path="join-our-team" element={<JoinOurTeam />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
        <Route
          path="create-new-post"
          element={
            <CreatePost onSave={handleOnSave} postId={postId} />
          }
        />
        <Route
          path="post/:postId"
          element={<DetailPostPage findPostById={findPostById} />}
        />
      </Routes>
    </div>
  );
}

export default App;
