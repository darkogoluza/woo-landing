import React from "react";
import {
  Container,
  Background,
  Title,
  ImageContainer,
  Description,
  LeftArrow,
  RightArrow,
  ArrowContainer,
} from "./testimonialsElements";
import background from "../../assets/testimonials-background.png";
import imageContainer from "../../assets/testim-image-bg.png";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

const Testimonials = () => {
  return (
    <>
      <Container>
        <Background src={background} />
        <Title>Trusted by Agencies & Store Owners</Title>
        <ImageContainer src={imageContainer}>
          <Description>
            No other eCommerce platform allows people to start for free and grow
            their store as their business grows. More importantly, WooCommerce
            doesn't charge you a portion of your profits as your business grows!
          </Description>
        </ImageContainer>
        <ArrowContainer>
          <LeftArrow src={leftArrow} />
          <RightArrow src={rightArrow} />
        </ArrowContainer>
      </Container>
    </>
  );
};

export default Testimonials;
