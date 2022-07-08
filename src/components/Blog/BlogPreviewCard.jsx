import Image from 'next/image';
import React, { useId } from 'react';
import styled from 'styled-components';
import { IconButton } from 'components/AppHeader';
import Link from 'next/link';

// -------------------styles-----------------
const Box = styled.div`
    width: 100%;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 16px;
    margin-bottom: 16px;
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
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
`;

const Description = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    padding-inline: 12px;
    color: rgba(0, 0, 0, 0.8);
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
const BlogPreviewCard = () => {
    const id = useId();

    return (
        <>
            <Link href={`/blog/${id}`}>
            <Box>
                <Image src='/memeHead.jpg' width={16} height={9} layout='responsive' objectFit='cover' alt='sjfj'/>

                <Heading>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, rerum?</Heading>

                <HorizontalStack>
                    <ExtraDetails>Thu 07 2020</ExtraDetails>
                    <ExtraDetails>50 views</ExtraDetails>
                    <ExtraDetails>4 min read</ExtraDetails>
                </HorizontalStack>

                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas corrupti saepe. Commodi harum quia ad consectetur, odit dolore numquam possimus officia impedit obcaecati modi porro error facilis nobis enim? Molestias modi deleniti deserunt explicabo ipsum possimus veniam provident sapiente quibusdam enim labore quaerat expedita officiis distinctio, laudantium ipsa neque id aliquid minima. Adipisci unde est, aliquid beatae quia nam!
                </Description>

                <Link href="/blog">
                    <IconButton maxWidth="100px" marginLeft="12px">Read More</IconButton>
                </Link>
            </Box>
            </Link>
        </>
    )
}

export default BlogPreviewCard