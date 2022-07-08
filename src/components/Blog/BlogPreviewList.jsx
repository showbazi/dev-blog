import React, { useId } from 'react';
import BlogPreviewCard from './BlogPreviewCard';
import styled from 'styled-components';
import Link from 'next/link';

// -------------------------styles-----------------------------
const PostListHeading = styled.h2`
    text-transform: uppercase;
    font-size: 36px;
    margin-top: 16px;
    margin-bottom: 16px;
`;

// -------------------------styles-----------------------------


const BlogPreviewList = () => {
  const id = useId();
  return (
    <>
        <PostListHeading>Top Blogs</PostListHeading>
        {Array(10).fill(0).map(() => <BlogPreviewCard key={id}/>)}
    </>
  )
}

export default BlogPreviewList