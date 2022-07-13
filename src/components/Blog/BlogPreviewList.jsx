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
    /* background-color:${prop => prop.theme === "rgba(255, 255, 255, 0.5)" ? "" : "rgba(0, 0, 0, 0.4)"} ; */
    /* backdrop-filter: blur(3rem); */
    padding: 0 2rem;
    border-radius: 20px;
    /* z-index: 2; */
`;

const PostListHeading = styled.h2`
    text-transform: uppercase;
    font-size: 36px;
    margin-top: 2rem;
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

// const CustomShape = styled.div`
//   position: absolute;
//   background-color: red;
//   width: 200px;
//   height: 200px;
//   border-radius: 30% 70% 70% 30% / 70% 70% 30% 30%;
// `;

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