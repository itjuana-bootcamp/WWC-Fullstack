import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "../styles/blog.css";

const Post = ({ post, onEdit, onDelete, id, isDetails }) => {
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
        <p>{post.updatedAt && format(new Date(post.updatedAt), 'MMMM dd, yyyy')}</p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p>By {post.author}</p>
        { !isDetails && <Link to={`post/${id}`}>READ MORE</Link> }
      </div>
      {
        isDetails &&
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Link
            className="blog-post-btn"
            to={`/create-new-post/${id}`}>
            Edit
          </Link>
          <button
            className="blog-post-btn"
            onClick={() => onDelete(id)}
          >
            X
          </button>
        </div>
     }
    </div>
  );
};

export default Post;
