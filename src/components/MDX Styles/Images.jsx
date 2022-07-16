import Image from "next/image";
import styled from "styled-components";

const CustomImageContainer = styled.div`
  padding-inline: 1rem;
`;

// custom component for Next.js Image component
const NextImage = (props) => (
    <CustomImageContainer>
        <Image {...props} />
    </CustomImageContainer>
)

const Images = {
    NextImage,
    
    img: (props) => (
        <CustomImageContainer>
            <img {...props} />
        </CustomImageContainer>
    )
};

export default Images;