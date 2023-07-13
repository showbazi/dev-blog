import React from "react";
import AppHeader from "./AppHeader";
import styled from "styled-components";
import { device } from "utils/ResponsiveBreakpoints";
import AppFooter from "./AppFooter";

// -----------------------------styles--------------------------------
const LayoutContainer = styled.div`
  padding-inline: 4rem;
  /* min-height: 78vh; */
  max-width: 1100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;

  @media ${device.tablet} {
    padding-inline: 1rem;
  }
`;

// -----------------------------styles--------------------------------

const PageLayout = ({ toggleTheme, theme, children }) => {
  return (
    <>
      <AppHeader toggleTheme={toggleTheme} theme={theme} />

      <LayoutContainer>{children}</LayoutContainer>

      <AppFooter />
    </>
  );
};

export default PageLayout;
