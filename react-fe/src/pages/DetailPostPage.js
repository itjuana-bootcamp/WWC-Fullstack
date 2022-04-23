import React from "react";
import { useParams } from "react-router-dom";

export const DetailPostPage = ({ findPostById }) => {
  const params = useParams();
  const { postId } = params;
  const post = findPostById(postId);
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
      </div>
    </div>
  );
};
