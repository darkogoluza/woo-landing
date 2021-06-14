import React from "react";
import { Container, Background, Wrapper } from "./sectionElements";
import background from "../../assets/section-bg.png";
import SectionCard from "../SectionCard";
import image1 from "../../assets/section-image1.png";
import imageBlur1 from "../../assets/section-image-blure1.png";
import image2 from "../../assets/section-image2.png";
import imageBlur2 from "../../assets/section-image-blure2.png";

const Section = () => {
  return (
    <>
      <Container>
        <Background src={background} />
        <Wrapper>
          <SectionCard
            isLeft={true}
            title="Develop <br />
Without Limits"
            description="WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way."
            imgSrc={image1}
            imgBlurSrc={imageBlur1}
          />
          <SectionCard
            isLeft={false}
            title="Know our <br />
Global Community"
            description="WooCommerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!"
            imgSrc={image2}
            imgBlurSrc={imageBlur2}
          />
        </Wrapper>
      </Container>
    </>
  );
};

export default Section;
