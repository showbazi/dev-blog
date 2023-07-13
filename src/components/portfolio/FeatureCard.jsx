import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import useGetViews from "hooks/useGetViews";

const Title = styled.p`
  font-weight: 500;
  font-size: 2vw;
  color: white;
  width: 60%;
  position: absolute;
  bottom: 1rem;
  left: 36px;
  z-index: 1000;
`;

const FeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 5vw;
  margin-bottom: 3vw;

  &:hover {
    ${Title} {
      color: rgba(97, 123, 255, 1);
      transition: 0.1s ease-in-out;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 24%, #000000 100%);
  }
`;

const FeaturedImage = styled(Image)`
  border-radius: 0.3vw;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 0.375rem;
  padding-inline: 2.25rem;
  gap: 2rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
  opacity: 0.7;
  font-weight: 500;
`;

const Views = styled.p``;

const ReadTime = styled.p``;

const PublishedDate = styled.p``;

export default function FeatureCard({ posts }) {
  const {
    title,
    banner,
    slug,
    createdAt,
    altText,
    customID,
    readingTime,
    totalViews,
  } = posts;

  // coverting the slug to a complete link
  const link = `/blog/${slug}`;

  const { data: views } = useGetViews(customID, totalViews);

  return (
    <Link href={link}>
      <FeaturedContainer>
        <ImageContainer>
          <FeaturedImage
            width={20}
            height={9}
            src={banner}
            layout="responsive"
            objectFit="cover"
            alt={altText}
          />
          <Title>{title}</Title>
        </ImageContainer>
        <DetailsContainer>
          <Views>{views} views</Views>
          <PublishedDate>{createdAt}</PublishedDate>
          <ReadTime>{`${readingTime}`}</ReadTime>
        </DetailsContainer>
      </FeaturedContainer>
    </Link>
  );
}
