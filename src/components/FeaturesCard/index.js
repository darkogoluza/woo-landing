import React from "react";
import {
  Container,
  Image,
  Title,
  Description,
  Link,
  Overlay,
} from "./featuresCardElements";

const FeaturesCard = ({ title, description, link, src, overlay_src, x, y }) => {
  return (
    <>
      <Container>
        <Image src={src}>
          <Overlay src={overlay_src} x={x} y={y} />
        </Image>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Link>{link}</Link>
      </Container>
    </>
  );
};

export default FeaturesCard;
