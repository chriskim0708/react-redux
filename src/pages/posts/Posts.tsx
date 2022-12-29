import React, { FC } from "react";
import PostsList from "./PostsList";
import AddPostForm from "./AddPostForm";

const Posts: FC = () => {
  return (
    <>
      <AddPostForm />
      <PostsList />
    </>
  );
};

export default Posts;
