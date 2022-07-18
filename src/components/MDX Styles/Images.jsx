import Image from "next/image";
import styled from "styled-components";

const CustomImageContainer = styled.div`
  /* padding-inline: 1rem; */
`;

// custom component for Next.js Image component
const NextImage = (props) => (
    <CustomImageContainer>
        <Image 
            {...props}
            alt="" 
            width={16}
            height={9}
            layout="responsive"
            objectFit="cover"
        />
    </CustomImageContainer>
)

const Images = {
    NextImage,
    
    img: (props) => (
        <CustomImageContainer>
            <Image 
                {...props} 
                alt="" 
                width={16}
                height={9}
                layout="responsive"
                objectFit="cover"
            />
        </CustomImageContainer>
    )
};

export default Images;