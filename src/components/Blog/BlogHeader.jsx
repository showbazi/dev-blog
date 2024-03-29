import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import useGetViews from "hooks/useGetViews";

// -------------------styles-----------------
const Box = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 24px;
`;

const Heading = styled.h2`
  font-family: "Wotfard", Futura, -apple-system, sans-serif;
  /* padding-inline: 12px; */
  font-size: 2.375rem;
  font-weight: 500;
  /* line-height: 1.2;
  display: block;  //Fallback for non-webkit 
  display: -webkit-box;
  -webkit-line-clamp: 2; // no of lines 
  text-overflow: ellipsis;
  overflow: hidden !important;
  -webkit-box-orient: vertical; */
`;

const HorizontalStack = styled.div`
  display: flex;
  gap: 20px;
  /* padding-inline: 12px; */
`;

const ExtraDetails = styled.span`
  font-family: "Poppins", sans-serif;
  /* font-size: 12px; */
  text-transform: uppercase;
  opacity: 0.6;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  font-weight: 400;
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
  const url = `/api/views/${customID}`;

  const { data: views, mutate } = useGetViews(customID, totalViews);

  useEffect(() => {
    //   for axios I want an async function but we can't make the callback of useEffect the async so we are using IIFE
    //   In IIFE the first parenthesis will store the actual function and second parenthesis will call that function
    (async () => {
      try {
        await axios.post(url);
        mutate();
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <Box>
        <Image
          src={banner}
          width={16}
          height={9}
          layout="responsive"
          objectFit="cover"
          alt={altText}
        />

        <Heading>{title}</Heading>

        <HorizontalStack>
          <ExtraDetails>{createdAt}</ExtraDetails>
          <ExtraDetails>{views} views</ExtraDetails>
          <ExtraDetails>{readingTime}</ExtraDetails>
        </HorizontalStack>
      </Box>
    </>
  );
};

export default BlogHeader;
