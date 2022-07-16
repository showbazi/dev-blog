import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const doubleRightSvg =  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>

// ------------------------------styles---------------------------------------
const ResultsContainer = styled.div``;

const ResultsSvg = styled.div`
    width: 1.6rem;
    padding-inline: 4px;  
    display: flex;
    align-items: center;
    color: rgba(91, 119, 255, 1);
`;

const SearchResultsCard = styled.div`
    width: 100%;
    border-radius: 6px;
    padding-inline: 1rem;
    margin-block: 0.5rem;
    min-height: 4rem;
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    background-color:${prop => prop.theme === "light" ? "#343333" : "#012420"} ;
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 1.2rem;
    gap: 1rem;
    align-items: center;

    &:hover{
        background-color: rgba(97, 123, 255, 0.5);
        transition: 0.1s ease-in-out;

        ${ResultsSvg}{
            color: white;
        }
    }
`;

const SearchResultsTextsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SearchResultsTitle = styled.div`
    font-size: 1.1rem;
    padding-top: 0.5rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    word-spacing: 2px;
    line-height: 1.8rem;
`;

const SearchResultsDescription = styled.p`
    font-size: 0.75rem;
    font-weight: 500;
    opacity: 0.7;
    padding-bottom: 0.2rem;
    display: block; /* Fallback for non-webkit */
    display: -webkit-box;
    -webkit-line-clamp: 1; /* no of lines */
    text-overflow: ellipsis;
    overflow:hidden !important;
    -webkit-box-orient: vertical;  
`;

const ExtraHorizontalStack = styled.div`
    display: flex;
    margin-block: 0.25rem;
    gap: 1rem;
`;

const ResultsExtraDetails = styled.span`
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    text-transform: uppercase;
    opacity: 0.6;
    font-weight: 500;
`;
// ------------------------------styles---------------------------------------


const SearchResults = ({searchResults, theme, handleModalState}) => {
    const router = useRouter();

    const handleRedirecting = (e, slug, handleModalState) => {
        e.preventDefault();
        handleModalState();
        router.push(`blog/${slug}`);
    }
    
    return (
        searchResults.map(({title, slug, createdAt, totalViews, readingTime, description, customID}) => (
            <ResultsContainer /*href={`blog/${slug}`}*/ onClick={(e) => handleRedirecting(e, slug, handleModalState)}>
                <SearchResultsCard key={customID} theme={theme} >
                    <SearchResultsTextsContainer>
                        <SearchResultsTitle>{title}</SearchResultsTitle>
                        <SearchResultsDescription>{description}</SearchResultsDescription>
                        <ExtraHorizontalStack>
                            <ResultsExtraDetails>{new Date(createdAt).toDateString()}</ResultsExtraDetails>
                            <ResultsExtraDetails>{totalViews} views</ResultsExtraDetails>
                            <ResultsExtraDetails>{readingTime}</ResultsExtraDetails>
                        </ExtraHorizontalStack>
                    </SearchResultsTextsContainer>

                    <ResultsSvg >
                        {doubleRightSvg}
                    </ResultsSvg>
                </SearchResultsCard>
            </ResultsContainer>
        ))
    )
}

export default SearchResults