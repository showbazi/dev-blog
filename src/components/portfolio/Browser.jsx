import React from "react";
import BrowserNav from "./BrowserNav";
import styled from "styled-components";
import BlogTab from "./BlogTab";

const BrowserContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 4rem;
  border: 3px solid #dadada;
  box-sizing: border-box;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Browser = ({posts}) => {
  return (
    <BrowserContainer>
      <BrowserNav />
      <BlogTab posts={posts}/>
    </BrowserContainer>
  );
};

export default Browser;
