import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useThemeStore } from "pages/_app";
import { LINKS, THEMES } from "utils/constants";

const ContactContainer = styled.div`
  width: 100%;
  padding-inline: 4rem;
  padding-top: 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 1.38vw;
  color: ${(prop) => (prop.theme === THEMES.LIGHT ? "#333333" : "#e3e3e3")};
  margin: 0;
  margin-block: 2rem;
`;

const SubTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.4vw;
  color: ${(prop) => (prop.theme === THEMES.LIGHT ? "#333333" : "#e3e3e3")};
  margin: 0;
`;

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-block: 1rem 2rem;
  gap: 1.5rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-family: "Space Mono", monospace;
  font-size: clamp(1rem, 3vw, 2rem);
  letter-spacing: 0.3rem;
  color: rgba(47, 66, 161, 0.85);
  padding: 0rem clamp(1rem, 2vw, 3rem);
  border-radius: clamp(0.4rem, 0.75vw, 1rem);

  &:hover {
    background-color: ${(prop) =>
      prop.theme === THEMES.LIGHT ? "#333333" : "#e3e3e3"};
    color: ${(prop) => (prop.theme === THEMES.LIGHT ? "white" : "black")};
  }
`;

const ContactTab = () => {
  const activeTheme = useThemeStore((state) => state.activeTheme);
  const [theme, setTheme] = useState(THEMES.DARK);
  const [currentDay, setCurrentDay] = useState(THEMES.DARK);

  useEffect(() => {
    const updateCurrentDay = () => {
      const today = new Date();
      const options = { weekday: "long" };
      const day = today.toLocaleDateString("en-US", options);
      setCurrentDay(day);
    };

    updateCurrentDay();
  }, []);

  useEffect(() => {
    setTheme(activeTheme);
  }, [activeTheme]);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  const handleMouseOver = (e) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return e.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= e.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <ContactContainer>
      <SubTitle theme={theme}>{currentDay} Bytes</SubTitle>
      <Title theme={theme}>
        👇👇 "Contact me, because life is too short to hire boring people. Let's
        create something amazing together, and maybe share a laugh or two along
        the way!" 👇👇
      </Title>
      <hr
          style={{ border: "2px solid rgba(255, 67, 67, 0.8)", width: "80%" }}
        />
      <SocialsContainer>
        {LINKS.map(({ title, link }) => {
          return (
            <StyledLink
              target="_blank"
              href={link}
              rel="noopener noreferrer"
              data-value={title}
              theme={theme}
              onMouseOver={handleMouseOver}
              key={title}
            >
              {title}
            </StyledLink>
          );
        })}
      </SocialsContainer>
    </ContactContainer>
  );
};

export default ContactTab;
