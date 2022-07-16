import React, { useId } from 'react';
import BlogPreviewCard from './BlogPreviewCard';
import styled from 'styled-components';

// -------------------------styles-----------------------------
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`;

const SubContainer = styled.div`
    padding: 0 2rem;
    border-radius: 20px;
`;

const PostListHeading = styled.h2`
    text-transform: uppercase;
    font-size: 36px;
    margin-top: 2rem;
    margin-bottom: 24px;
    width: max-content;
    padding: 0 8px 4px 0;
    border-bottom: 4px solid rgba(97, 123, 255, 1);
`;

const PostsContainer = styled.div`
    width: 60vw;
`;

// -------------------------styles-----------------------------


const BlogPreviewList = ({heading, blogs, theme}) => {
  
  return (
    <MainContainer>
        <SubContainer theme={theme}>
            <PostListHeading>{heading}</PostListHeading>

            <PostsContainer>
                {blogs.map((blog) => <BlogPreviewCard {...blog} key={blog.customID}/>)}
            </PostsContainer>
        </SubContainer>
        {/* <CustomShape /> */}
    </MainContainer>
  )
}

export default BlogPreviewList