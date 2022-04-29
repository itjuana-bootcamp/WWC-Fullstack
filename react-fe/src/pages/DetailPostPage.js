import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/apiPost";

export const DetailPostPage = () => {
  const params = useParams();
  const { postId } = params;
  const [post, setPost] = useState({});

  const fetchPost = async () => {
    const res = await getPostById(postId);
    setPost(res);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  //const post = findPostById(postId);
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
