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
          />
        );
      })}
    </>
  );
};

export default ListPost;
