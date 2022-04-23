import "./styles/App.css";
import NavBar from "./components/NavBar";
import FeaturedPost from "./components/FeaturedPost";
import ListPost from "./components/ListPost";
import posts from "./resources/posts";
//import CreatePost from "./components/CreatePost";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { JoinOurTeam } from "./pages/JoinOurTeam";
import { ContactUs } from "./pages/ContactUs";
import { HomePage } from "./pages/HomePage";
import CreatePost from "./pages/CreatePost";
import { DetailPostPage } from "./pages/DetailPostPage";
import { Error } from "./components/Error";

function App() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [allPosts, setAllPosts] = useState(posts());
  const [postId, setPostId] = useState();

  const findPostById = (id) => {
    return allPosts[id];
  };

  const handleOnSave = (post) => {
    if (postId || postId === 0) {
      const copyOfPosts = allPosts.map((item, index) =>
        index === postId ? post : item
      );
      // const copyOfPosts = Array.from(allPosts);
      // const newAllPosts = copyOfPosts.filter((post, index) => index !== postId); //[...copyOfPosts, post];

      setAllPosts(copyOfPosts);
      setPostId();
    } else {
      setAllPosts([...allPosts, post]);
    }
    navigate("/");
    //navigate("/",{replace:true});
  };

  const handleOnEdit = (postId) => {
    // setIsVisible(true); //onPress()
    setPostId(postId);
    navigate("/create-new-post");
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          index
          element={<HomePage posts={allPosts} onEdit={handleOnEdit} />}
        />
        <Route path="join-our-team" element={<JoinOurTeam />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
        <Route
          path="create-new-post"
          element={
            <CreatePost onSave={handleOnSave} postToUpdate={allPosts[postId]} />
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
