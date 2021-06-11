import React from "react";
import Nav from "../Nav";
import {
  Background,
  Button,
  Container,
  Content,
  Description,
  Gradient,
  Link,
  LinkContainer,
  LinkHighLight,
  Wrapper,
  Title,
  ContentWrapper,
  FeatureImage,
} from "./heroElements";
import bacground from "../../assets/w-background.svg";
import featureImage from "../../assets/featured-image.png";

const Hero = () => {
  return (
    <>
      <Container>
        <Gradient />
        <Background src={bacground} />
        <Nav />
        <ContentWrapper>
          <Content>
            <Title>Building exactly the eCommerce website you want.</Title>
            <Description>
              WooCommerce is a customizable, open-source eCommerce platform
              built on WordPress. Get started quickly and make your way.
            </Description>
            <Wrapper>
              <Button>Start a New Store</Button>
              <LinkContainer>
                <Link>or </Link>
                <LinkHighLight href="#">
                  {`${"Customize & Extend >"}`}
                </LinkHighLight>
              </LinkContainer>
            </Wrapper>
          </Content>
          <FeatureImage src={featureImage} />
        </ContentWrapper>
      </Container>
    </>
  );
};

export default Hero;
