import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/blog.css";

const NavBar = ({ onPress }) => {
  return (
    <div className="blog-post-navbar">
      <div className="blog-post-brand">
        <Link to="/">
          <img
            src="https://itjuana.com/wp-content/uploads/ITJ_tm-logo.png"
            alt="itjuana logo"
            width={80}
            height={80}
          />
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to="join-our-team">Join our team</NavLink>
        </li>
        <li>
          <NavLink to="contact-us">Contact us</NavLink>
        </li>
        <li>
          <Link to="create-new-post">
            Create New Post
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
