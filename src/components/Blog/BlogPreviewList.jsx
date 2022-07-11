import React, { useId } from 'react';
import BlogPreviewCard from './BlogPreviewCard';
import styled from 'styled-components';

// -------------------------styles-----------------------------
const PostListHeading = styled.h2`
    text-transform: uppercase;
    font-size: 36px;
    margin-top: 40px;
    margin-bottom: 24px;
    width: max-content;
    padding: 0 8px 6px 0;
    border-bottom: 2px solid red;
`;

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

// -------------------------styles-----------------------------


const BlogPreviewList = ({heading, blogs}) => {
  
  return (
    <>
        <PostListHeading>{heading}</PostListHeading>

        <PostContainer>
            {blogs.map((blog) => <BlogPreviewCard {...blog} key={blog.customID}/>)}
        </PostContainer>
    </>
  )
}

export default BlogPreviewList