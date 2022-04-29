import React from "react";
import FeaturedPost from "../components/FeaturedPost";
import ListPost from "../components/ListPost";

export const HomePage = ({ posts, onEdit, onDelete }) => {
  return (
    <>
      <FeaturedPost
        updatedAt={"May 13 2021"}
        height={250}
        width={250}
        title={"The Internet of Medical Things: The Healthcare Revolution"}
        content={
          "Since the Pandemic started, we have experienced a growing dependency on technology in the healthcare industry, which demands continuous innovation to deal with the new health dangers."
        }
        image={"https://www.w3schools.com/tags/img_girl.jpg"}
      />

      <ListPost posts={posts} onEdit={onEdit} onDelete={onDelete} />
    </>
  );
};
