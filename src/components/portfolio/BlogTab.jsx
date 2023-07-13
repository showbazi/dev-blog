import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { THEMES } from "utils/constants";
import { useThemeStore } from "pages/_app";
import FeatureCard from "./FeatureCard";
import BlogPreviewList from "components/Blog/BlogPreviewList";

const BlogContainer = styled.div`
  padding-inline: 4rem;
  padding-top: 3vw;
  background-color: ${(prop) =>
    prop.theme === THEMES.LIGHT ? "white" : "black"};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: none;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 4vw;
  margin-bottom: 3vw;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IntroTextContainer = styled.div`
  font-weight: 500;
  color: #333333;
  margin-left: 1.5vw;
`;

const StyledDP = styled.div`
  background-color: rgb(255, 67, 67);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
`;

const NameText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 2.25rem;
  color: ${(prop) => (prop.theme === THEMES.LIGHT ? "#333333" : "#e3e3e3")};
  margin: 0;
`;

const ArticleCountText = styled.p`
  color: #8c8c8c;
`;

const IntroButton = styled.button`
  background-color: #ff4343;
  font-size: 1.8vw;
  width: 10rem;
  height: 3rem;
  outline: none !important;
  border: none;
  color: white;
  border-radius: 0.8vw;
  text-align: center;
  cursor: pointer;
`;

const ArticleHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ArticlesHeading = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 124.5%;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${(prop) => (prop.theme === THEMES.LIGHT ? "#333333" : "#e3e3e3")};
  margin-bottom: 0.875rem;
`;

const BlogTab = ({ posts }) => {
  const activeTheme = useThemeStore((state) => state.activeTheme);
  const [theme, setTheme] = useState(THEMES.DARK);

  useEffect(() => {
    setTheme(activeTheme);
  }, [activeTheme]);

  const handleContactClick = () => {
    const mailtoLink = `mailto:mail.bsagar@gmail.com`;
    window.location.href = mailtoLink;
  };

  return (
    <BlogContainer theme={theme}>
      <IntroContainer>
        <SummaryContainer>
          <StyledDP>BS</StyledDP>
          <IntroTextContainer>
            <NameText theme={theme}>B. Sagar</NameText>
            <ArticleCountText>{posts.length} articles</ArticleCountText>
          </IntroTextContainer>
        </SummaryContainer>
        <IntroButton onClick={handleContactClick}>Say Hi</IntroButton>
      </IntroContainer>
      <ArticleHeadingContainer>
        <ArticlesHeading theme={theme}>All Articles</ArticlesHeading>
        <hr
          style={{ border: "2px solid rgba(97, 123, 255, 1)", width: "60%" }}
        />
      </ArticleHeadingContainer>
      {posts.length && <FeatureCard posts={posts[0]} />}
      {posts.length && <BlogPreviewList blogs={posts} theme={theme} />}
    </BlogContainer>
  );
};

export default BlogTab;
