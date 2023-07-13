import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import useGetViews from "hooks/useGetViews";

const FeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 5vw;
  margin-bottom: 3vw;
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
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 29.88%, #000000 100%);
  }
`;

const FeaturedImage = styled(Image)`
  border-radius: 0.3vw;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 2vw;
  color: white;
  width: 36vw;
  position: absolute;
  bottom: 2px;
  left: 36px;
  z-index: 1000;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 1.5rem;
  padding-inline: 2.25rem;
  gap: 2rem;
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
          <FeaturedImage width={20} height={9} src={banner} layout="responsive" objectFit="cover" alt={altText} />
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
