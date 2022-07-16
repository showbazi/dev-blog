import Link from 'next/link';
import React, { useState } from 'react'
import { device } from 'utils/ResponsiveBreakpoints';
import styled from 'styled-components';
import Search from './Search';
import useLockBodyScroll from 'hooks/useLockBodyScroll';



// ---------icons----------
const searchButtonSvg = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>

const nightButtonSvg =  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>

const nightButtonBoldSvg =  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>

const lightButtonSvg =  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>

const lightButtonBoldSvg =  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>           

const hamburgerMenuButtonSvg =  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>


// ------------------------------------styles------------------------------------------
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    padding-inline: 2rem;

    @media ${device.tablet} {
        padding-inline: 6rem;
    }
`;

const Logo = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 32px;
    padding-inline: 4px;
    padding-bottom: 14px;
    border: 1.5px solid ${prop => prop.theme === "light" ? "black" : "rgba(250, 250, 250, 1)"};
    cursor: pointer;
    position: relative;
`;

const LogoElement1 = styled.h2`
    font-weight: 200;
    font-size: 11px;
`;

const LogoElement2 = styled.span`
    font-weight: 700;
    font-size: 16px;
    position: absolute;
    top: 8px;
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const IconButton = styled.button`
    background-color:${prop => prop.theme === "light" ? "" : "rgba(0, 0, 0, 0.4)"} ;
    color: ${prop => prop.theme === "light" ? "black" : "white"};
    padding: 8px;
    max-width: ${props => props.maxWidth};
    margin-left: ${props => props.marginLeft};
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color:${prop => prop.theme === "light" ? "rgba(250, 0, 0, 1)" : "rgba(0, 0, 0, 0.5)"} ;
        filter: brightness(5) contrast(2);
    }
`;

const Icon = styled.svg`
    color: ${prop => prop.theme === "light" ? "black" : "white"};
    width: 16px;
    height: 16px;
`;
// ------------------------------------styles------------------------------------------


const CustomIconButton = ({handleIconHover, children, theme, onClick}) => {
    return (
        <IconButton onMouseEnter={handleIconHover} onMouseLeave={handleIconHover} onClick={onClick}>
            <Icon theme={theme}>
                {children}
            </Icon>
        </IconButton>        
    )
}

// ---------main component------------------
const AppHeader = ({toggleTheme, theme}) => {

    const [isHovered, setIsHovered] = useState(false);
    // const [isDark, setIsDark] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    // custom hook to lock the scroll of body on modal opening
    const {isLocked, handleToggle} = useLockBodyScroll();

    const handleIconHover = () => {
        setIsHovered(prev => !prev);
    }

    const handleModalState = () => {
        setIsModalOpen(prev => !prev);
        handleToggle();
    }

    // const handleTheme = () => {
    //     setIsDark(prev => !prev);
    // } 
    return (
        <>
            <HeaderContainer>
                <Link href="/" alt="homepage">
                    <Logo theme={theme}>
                        <LogoElement1>SAGAR</LogoElement1>
                        <LogoElement2>SHOWBAZI.</LogoElement2>
                    </Logo>
                </Link>


                <LinksContainer>
                    <CustomIconButton theme={theme} onClick={handleModalState}>
                        {console.log("modal is open", isModalOpen)}
                        
                        {searchButtonSvg}
                    </CustomIconButton>
                    
                    <CustomIconButton handleIconHover={handleIconHover} onClick={toggleTheme} theme={theme}>
                        {theme === "dark" ? (
                            isHovered ? lightButtonSvg : lightButtonBoldSvg
                        ) : (
                            isHovered ? nightButtonSvg : nightButtonBoldSvg
                        )}
                    </CustomIconButton>

                    <CustomIconButton theme={theme}>
                        {hamburgerMenuButtonSvg}
                    </CustomIconButton>
                </LinksContainer>
            </HeaderContainer>
            
            {!!isModalOpen && 
                <Search isModalOpen={isModalOpen} handleModalState={handleModalState} theme={theme}/> 
            }
        </>
    )
}

export default AppHeader