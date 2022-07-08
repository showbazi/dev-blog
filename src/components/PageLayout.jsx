import React from 'react'
import AppHeader from './AppHeader'
import styled from 'styled-components';
import { device } from 'utils/ResponsiveBreakpoints';

// -----------------------------styles--------------------------------
const LayoutContainer = styled.div`
  padding-inline: 2rem;

  @media ${device.tablet} {
        padding-inline: 4rem;
    }
`;

// -----------------------------styles--------------------------------


const PageLayout = ({toggleTheme, theme, children}) => {
  return (
    <>
        <AppHeader toggleTheme={toggleTheme} theme={theme} />

        <LayoutContainer>
            {children}
        </LayoutContainer>
    </>
  )
}

export default PageLayout