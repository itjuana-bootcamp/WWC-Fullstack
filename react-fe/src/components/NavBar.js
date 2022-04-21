import React from "react";
import "../styles/blog.css";

const NavBar = () => { 
  return (
    <div className="blog-post-navbar">
      <div className="blog-post-brand">
        <a href="https://itjuana.com/">
          <img
            src="https://itjuana.com/wp-content/uploads/ITJ_tm-logo.png"
            alt="itjuana logo"
            width={80}
            height={80}
          />
        </a>
      </div>
      <ul>
        <li><a href="#">Join our team</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Create New Post</a></li>
      </ul>
    </div>
  );
}

export default NavBar