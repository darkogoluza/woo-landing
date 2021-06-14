import React from "react";
import {
  Container,
  Image,
  ImageBlur,
  ContentContainer,
  Title,
  Description,
  Button,
  ImageContainer,
} from "./sectionCardElements";

const SectionCard = ({
  isLeft = false,
  title,
  description,
  imgSrc,
  imgBlurSrc,
}) => {
  return (
    <>
      <Container style={{ flexDirection: `${isLeft ? "row" : "row-reverse"}` }}>
        <ImageContainer
          style={{
            marginLeft: `${isLeft ? "" : "4.375rem"}`,
            marginRight: `${isLeft ? "4.375rem" : "0"}`,
          }}
        >
          <Image src={imgSrc} />
          <ImageBlur src={imgBlurSrc} />
        </ImageContainer>
        <ContentContainer>
          <Title>
            <div
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            ></div>
          </Title>
          <Description>{description}</Description>
          <Button>Read the Documentation</Button>
        </ContentContainer>
      </Container>
    </>
  );
};

export default SectionCard;
