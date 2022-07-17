import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "utils/ResponsiveBreakpoints";
import { searchButtonSvg } from "./AppHeader";
import useDebounce from "hooks/useDebounce";
import SearchResults from "./SearchResults";

// ------------------------------styles---------------------------------------
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
  padding-inline: 1rem;
  overflow-y: auto;
  top: 10vh;
  width: 90%;
  left: calc(50% - 300px);
  max-width: 600px;
  max-height: 75vh;
  z-index: 12;
  border-radius: 6px;
  background-color: ${(prop) =>
    prop.theme === "light" ? "rgb(27, 56, 78)" : "rgba(0, 41, 74, 1)"};

  @media ${device.tablet} {
    left: 5%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 11;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 2.75rem;
  display: flex;
  border-bottom: ${(prop) =>
    prop.borderBottom === "1" ? "1px solid rgba(97, 123, 255, 0.7)" : null};
`;

export const ModalHeaderSvg = styled.svg`
  width: 1.6rem;
  padding-inline: 2px 6px;
  color: ${(prop) => prop.color};
`;

const ModalHeaderInput = styled.input`
  width: 94%;
  height: 100%;
  margin: auto;
  padding-inline: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  caret-color: rgba(97, 123, 255, 1);
  outline: none;
  border: none;
  background-color: transparent;
`;
// ------------------------------styles---------------------------------------

// ------------------------main component--------------------------------------
const Search = ({ isModalOpen, handleModalState, theme }) => {
  const [queryText, setQueryText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleQueryChange = (e) => {
    const { value } = e.target;
    setQueryText(value);
  };

  const debouncedText = useDebounce(queryText, 500);

  const fetchResult = async () => {
    const { data } = await axios.get("/api/search", {
      params: {
        query: debouncedText,
      },
    });
    setSearchResults(data);
  };
  // console.log("deb text", debouncedText);
  // console.log("sesrch results", searchResults);
  useEffect(() => {
    if (!debouncedText) {
      setSearchResults([]);
      return;
    }

    fetchResult();
  }, [debouncedText]);

  return (
    <ModalContainer>
      <Overlay onClick={handleModalState}></Overlay>
      <ModalContent theme={theme}>
        <ModalHeader borderBottom={searchResults.length > 0 ? "1" : null}>
          <ModalHeaderSvg theme={theme} color="rgba(97, 123, 255, 1)">
            {searchButtonSvg}
          </ModalHeaderSvg>
          <ModalHeaderInput
            type="text"
            autoFocus={true}
            placeholder="Search blogs..."
            theme={theme}
            value={queryText}
            onChange={handleQueryChange}
          />
        </ModalHeader>

        {!!searchResults && (
          <SearchResults
            searchResults={searchResults}
            theme={theme}
            handleModalState={handleModalState}
          />
        )}
      </ModalContent>
    </ModalContainer>
  );
};

export default Search;
