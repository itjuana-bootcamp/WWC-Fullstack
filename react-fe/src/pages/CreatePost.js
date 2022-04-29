import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/forms.css";
import { getPostById } from "../api/apiPost";

const CreatePost = ({ onSave, postId }) => {
  const newPost = {
    title: "",
    body: "",
    imageUrl: "",
    author: "",
    updatedAt: new Date().toISOString(),
  };

  //const [newPostState, setNewPostState] = useState(postToUpdate || newPost);
  const [newPostState, setNewPostState] = useState(newPost);

  const fetchingPostById = async () => {
    const res = await getPostById(postId);
    setNewPostState(res);
  };

  useEffect(() => {
    if (postId) {
      fetchingPostById();
    } else {
      setNewPostState(newPost);
      //console.log("creating new post");
    }
  }, []);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewPostState({ ...newPostState, [name]: value });
  };

  return (
    <div className="container">
      <form id="create-post-form" className="post-form">
        <div className="input-field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Add a title"
            value={newPostState.title}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-field">
          <label>Body</label>
          <textarea
            type="text"
            name="body"
            placeholder="Add a body to the post"
            value={newPostState.body}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-field">
          <label>Author</label>
          <textarea
            type="text"
            name="author"
            placeholder="Add a author to the post"
            value={newPostState.author}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-field">
          <label>Image</label>
          <input
            type="text"
            name="imageUrl"
            value={newPostState.imageUrl}
            onChange={handleOnChange}
          />
        </div>

        <div className="buttons-container">
          <Link to="/">
            <button type="button">Cancel</button>
          </Link>

          <button type="button" onClick={() => onSave(newPostState)}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
