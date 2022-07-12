import React, { useId } from 'react';
import BlogPreviewCard from './BlogPreviewCard';
import styled from 'styled-components';

// -------------------------styles-----------------------------
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SubContainer = styled.div`

`;

const PostListHeading = styled.h2`
    text-transform: uppercase;
    font-size: 36px;
    margin-top: 40px;
    margin-bottom: 24px;
    width: max-content;
    padding: 0 8px 6px 0;
    border-bottom: 2px solid red;
`;

const PostsContainer = styled.div`
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem; */
    width: 60vw;
`;

// -------------------------styles-----------------------------


const BlogPreviewList = ({heading, blogs}) => {
  
  return (
    <MainContainer>
        <SubContainer>
            <PostListHeading>{heading}</PostListHeading>

            <PostsContainer>
                {blogs.map((blog) => <BlogPreviewCard {...blog} key={blog.customID}/>)}
            </PostsContainer>
        </SubContainer>
    </MainContainer>
  )
}

export default BlogPreviewList