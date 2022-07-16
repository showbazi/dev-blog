import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { IconButton } from 'components/AppHeader';
import Link from 'next/link';
import useGetViews from 'hooks/useGetViews';

// -------------------styles-----------------

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

const Box = styled.div`
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 24px;
    cursor: pointer;

    &:hover {
        ${Heading}{
            color: red;
            transition: 0.1s ease-in-out;
        }
    }
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

const Description = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    padding-inline: 12px;
    /* color: rgba(0, 0, 0, 0.8); */
    opacity: 0.8;
    width:100%;
    display: block; /* Fallback for non-webkit */
    display: -webkit-box;
    -webkit-line-clamp: 3; /* no of lines */
    text-overflow: ellipsis;
    overflow:hidden !important;
    -webkit-box-orient: vertical;  
`;
// -------------------------styles----------------------

// ---------main component-----------------
const BlogPreviewCard = ({
    altText,
    banner,
    createdAt,
    customID,
    description,
    readingTime,
    slug,
    title,
    totalViews,
}) => {

    const { data: views} = useGetViews(customID, totalViews);
    
    // coverting the slug to a complete link
    const link = `/blog/${slug}`

    return (
        <>
            <Link href={link}>
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
                        <ExtraDetails>{views} views</ExtraDetails>
                        <ExtraDetails>{readingTime}</ExtraDetails>
                    </HorizontalStack>

                    <Description>
                        {description}
                    </Description>

                    <Link href={link}>
                        <IconButton maxWidth="100px" marginLeft="12px" >Read More</IconButton>
                    </Link>
                </Box>
            </Link>
        </>
    )
}

export default BlogPreviewCard