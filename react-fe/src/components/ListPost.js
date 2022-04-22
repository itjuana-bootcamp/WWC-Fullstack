import React from "react";
import Post from "./Post";

const ListPost = ({posts, onEdit}) => {
  return (
    <>
      {
        posts.map((post, index) => {
          return <Post key={post.updatedAt + post.title} post={post} onEdit={()=>onEdit(index)}/>
        })
      }
    </>
  );
}

export default ListPost;