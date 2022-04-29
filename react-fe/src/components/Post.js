import React from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";

const Post = ({ post, onEdit, onDelete, id }) => {
  return (
    <div className="blog-post">
      <div className="blog-post-image">
        <img
          src={post.imageUrl}
          alt="Blog header image"
          width={250}
          height={250}
        />
      </div>
      <div className="blog-post-details">
        <p>{post.updatedAt}</p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link to={`post/${id}`}>Read More</Link>
      </div>
      <button onClick={() => onEdit()}>Edit</button>
      <button onClick={onDelete}>delete</button>
    </div>
  );
};

export default Post;
