import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar";
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
    const res = await createPost(post);
    setAllPosts([...allPosts, post]);
    navigate("/", {replace: true});
  };

  const handleOnEdit = async (postId, post) => {
    const res = await updatePost(postId, post);
    const copyOfPosts = allPosts.map((item) =>
      item._id === res._id ? post : item
    );
    setAllPosts(copyOfPosts);
    navigate("/", {replace: true});
  };

  const onDelete = async (id) => {
    const res = await deletePost(id);
    const copyOfPosts = allPosts.filter((item) => item._id !== id);
    setAllPosts(copyOfPosts);
    navigate("/", {replace: true});
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
            <CreatePost onSave={handleOnSave} />
          }
        />
        <Route
          path="post/:postId"
          element={<DetailPostPage onDelete={onDelete} />}
        />
         <Route
          path="create-new-post/:postId"
          element={
            <CreatePost onSave={handleOnEdit} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
