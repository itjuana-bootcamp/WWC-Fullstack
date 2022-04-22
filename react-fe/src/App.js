import './styles/App.css';
import NavBar from './components/NavBar';
import FeaturedPost from './components/FeaturedPost';
import ListPost from './components/ListPost';
import posts from './resources/posts';
import CreatePost from './components/CreatePost';
import React, { useState } from "react";

function App() {

  const [isVisible, setIsVisible] = useState(false);
  const [allPosts, setAllPosts] = useState(posts());
  const [postId, setPostId] = useState();

  const onPress = () => {
    setIsVisible(!isVisible);
  };

  const handleOnSave = (post) => {
    if(postId) {
      const copyOfPosts = Array.from(allPosts);
      const newAllPosts = copyOfPosts.filter((post, index) => index !== postId);//[...copyOfPosts, post]; 
      setAllPosts([...newAllPosts, post]);
      setPostId();
    }
    else{
      setAllPosts([...allPosts, post]);
    }
    setIsVisible(false); //onPress()
  };

  const handleOnEdit = (postId) => {
    setIsVisible(true); //onPress()
    setPostId(postId);
  };

  return (
    <div className="App">
      <NavBar onPress={()=>onPress()}/>

      {
        isVisible ?
        <CreatePost 
          postToUpdate={allPosts[postId]}
          onPress={()=>onPress()}
          onSave={handleOnSave}
        />
        :
        <>
          <FeaturedPost 
            updatedAt={"May 13 2021"} 
            height={250} 
            width={250} 
            title={"The Internet of Medical Things: The Healthcare Revolution"} 
            content={"Since the Pandemic started, we have experienced a growing dependency on technology in the healthcare industry, which demands continuous innovation to deal with the new health dangers."} 
            image={"https://www.w3schools.com/tags/img_girl.jpg"}
          />

          <ListPost posts={allPosts} onEdit={handleOnEdit}/>
        </>
      }     
     
    </div>
  );
}

export default App;
