import React, { useId } from "react";
import BlogPreviewCard from "./BlogPreviewCard";
import styled from "styled-components";

// -------------------------styles-----------------------------
const MainContainer = styled.div`
  margin-top: 3rem;
`;

const PostsContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
`;

// -------------------------styles-----------------------------

const BlogPreviewList = ({ blogs }) => {
  return (
    <MainContainer>
        <PostsContainer>
          {blogs.map((blog) => (
            <BlogPreviewCard {...blog} key={blog.customID} isEvenBlog={blogs.length % 2 === 0} />
          ))}
        </PostsContainer>
    </MainContainer>
  );
};

export default BlogPreviewList;
