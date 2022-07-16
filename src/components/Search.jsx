import React, { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0; 
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(1rem);
    z-index: 10;
`;

const ModalContent = styled.div`
    position: absolute;
    overflow-y: auto;
    top: 20%;
    left: 25%; 
    width: 50%;
    height: 50%;
    z-index: 12;
    /* background-color:${prop => prop.theme === "light" ? "" : "rgba(0, 0, 0, 1)"} ; */
    /* background-color: rgba(97, 123, 255, 1); */
`;

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 11;
`;


const ModalHeader = styled.input`
    width: 60%;
    display: flex;
    margin: auto;
    height: 2.5rem;
    border-radius: 6px;
    outline: none;
    border: none;
    background-color:${prop => prop.theme === "light" ? "#6c6b6b" : "#012420"} ;
`;

const Search = ({isModalOpen, handleModalState, theme}) => {
    const [queryText, setQueryText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    return (
        <ModalContainer>
            <Overlay onClick={handleModalState}></Overlay>
            <ModalContent theme={theme}>
                <ModalHeader theme={theme} />
            </ModalContent>
        </ModalContainer>
    )
}

export default Search