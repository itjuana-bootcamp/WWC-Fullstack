import "./styles/App.css";
import NavBar from "./components/NavBar";
import FeaturedPost from "./components/FeaturedPost";
import ListPost from "./components/ListPost";
import posts from "./resources/posts";
//import CreatePost from "./components/CreatePost";
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
  const [isVisible, setIsVisible] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [postId, setPostId] = useState();

  const fetchPosts = async () => {
    const res = await getAllPost();
    console.log("***");
    console.log(res);
    setAllPosts(res);
  };

  useEffect(() => {
    console.log("***");
    fetchPosts();
  }, []);

  const findPostById = (id) => {
    return allPosts[id];
  };

  const handleOnSave = async (post) => {
    console.log(post);
    if (postId) {
      const res = await updatePost(post._id, post);
      //console.log(res);
      const copyOfPosts = allPosts.map((item) =>
        item._id === res._id ? post : item
      );
      setAllPosts(copyOfPosts);
      // setPostId();
    } else {
      const res = await createPost(post);
      // console.log("my response", res);
      setAllPosts([...allPosts, post]);
    }
    navigate("/");
  };

  const handleOnEdit = (postId) => {
    console.log(postId);
    // setIsVisible(true); //onPress()
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
            //  <CreatePost onSave={handleOnSave} postToUpdate={allPosts[postId]} />
            <CreatePost onSave={handleOnSave} postId={postId} />
          }
        />
        <Route
          path="post/:postId"
          element={<DetailPostPage findPostById={findPostById} />}
        />
      </Routes>

      {/* {isVisible ? (
        <CreatePost
          postToUpdate={allPosts[postId]}
          onPress={() => onPress()}
          onSave={handleOnSave}
        />
      ) : (
        <>
          <FeaturedPost
            updatedAt={"May 13 2021"}
            height={250}
            width={250}
            title={"The Internet of Medical Things: The Healthcare Revolution"}
            content={
              "Since the Pandemic started, we have experienced a growing dependency on technology in the healthcare industry, which demands continuous innovation to deal with the new health dangers."
            }
            image={"https://www.w3schools.com/tags/img_girl.jpg"}
          />

          <ListPost posts={allPosts} onEdit={handleOnEdit} />
        </>
      )} */}
    </div>
  );
}

export default App;
