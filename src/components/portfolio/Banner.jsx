import { useThemeStore } from "pages/_app";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { THEMES } from "utils/constants";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
  width: 40vw;
  margin-top: 10vw;
`;

const Title = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 3vw;
  color: ${(prop) => (prop.theme === THEMES.LIGHT ? "#333333" : "#e3e3e3")};
  margin: 0;
  margin-top: 1.5rem;
`;

const SubTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2vw;
  color: ${(prop) => (prop.theme === THEMES.LIGHT ? "#8b8b8b" : "#c5c5c5")};
  margin: 0;
`;

export default function Banner() {
  const activeTheme = useThemeStore((state) => state.activeTheme);

  const [theme, setTheme] = useState(THEMES.DARK);

  useEffect(() => {
    setTheme(activeTheme);
  }, [activeTheme]);

  return (
    <BannerContainer>
      <SubTitle theme={theme}>Code, Sleep, Repeat</SubTitle>
      <Title theme={theme}>
        Hey there! I&apos;m <span style={{ color: "#FF4343" }}>Sagar</span>, a
        software engineer.
      </Title>
    </BannerContainer>
  );
}
