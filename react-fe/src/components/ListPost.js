import React from "react";
import Post from "./Post";

const ListPost = ({ posts, onEdit, onDelete }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <Post
            id={post._id}
            key={post._id}
            post={post}
            onEdit={() => onEdit(post._id)}
            onDelete={() => onDelete(post._id)}
          />
        );
      })}
    </>
  );
};

export default ListPost;
