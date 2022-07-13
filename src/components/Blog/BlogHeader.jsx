import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

// -------------------styles-----------------
const Box = styled.div`
    width: 100%;
    margin-top: 3rem;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 24px;
    cursor: pointer;
`;

const Heading = styled.h2`
    font-family: 'Poppins', sans-serif;
    padding-inline: 12px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    display: block; /* Fallback for non-webkit */
    display: -webkit-box;
    -webkit-line-clamp: 2; /* no of lines */
    text-overflow: ellipsis;
    overflow:hidden !important;
    -webkit-box-orient: vertical;  
`;

const HorizontalStack = styled.div`
    display: flex;
    gap: 20px;
    padding-inline: 12px;
`;

const ExtraDetails = styled.span`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    opacity: 0.6;
    font-weight: 500;
`;


const BlogHeader = ({
    banner,
    title,
    altText,
    createdAt,
    readingTime,
    totalViews,
    customID,
}) => {
  return (
    <>
        <Box>
            <Image 
                src={banner} 
                width={16}
                height={9}
                layout='responsive'
                objectFit='cover'
                alt={altText}
            />

            <Heading>{title}</Heading>

            <HorizontalStack>
                <ExtraDetails>{createdAt}</ExtraDetails>
                <ExtraDetails>{totalViews} views</ExtraDetails>
                <ExtraDetails>{readingTime}</ExtraDetails>
            </HorizontalStack>
        </Box>
    </>
  )
}

export default BlogHeader