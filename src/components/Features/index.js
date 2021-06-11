import React from "react";
import FeaturesCard from "../FeaturesCard";
import { Container, Title, CardContainer } from "./featuresElements";
import featuresImage1 from "../../assets/features-image-1.png";
import featuresImageOverlay1 from "../../assets/features-image-overlay-1.png";
import featuresImage2 from "../../assets/features-image-2.png";
import featuresImageOverlay2 from "../../assets/features-image-overlay-2.png";
import featuresImage3 from "../../assets/features-image-3.png";
import featuresImageOverlay3 from "../../assets/features-image-overlay-3.png";

const Features = () => {
  return (
    <>
      <Container>
        <Title>Your eCommerce made simple</Title>
        <CardContainer>
          <FeaturesCard
            title="All You Need to Start"
            description="Add WooCommerce plugin to any WordPress site and set up a new store in minutes."
            link="Ecommerce for Wordpress ›"
            src={featuresImage1}
            overlay_src={featuresImageOverlay1}
            x="-150px"
            y="-55px"
          />
          <FeaturesCard
            title="Customize and Extend"
            description="From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable."
            link="Browse Extensions ›"
            src={featuresImage2}
            overlay_src={featuresImageOverlay2}
            x="-70px"
            y="-80px"
          />
          <FeaturesCard
            title="Active Community"
            description="WooCommerce is one of the fastest-growing eCommerce communities."
            link="Check our Forums ›"
            src={featuresImage3}
            overlay_src={featuresImageOverlay3}
            x="-60px"
            y="-150px"
          />
        </CardContainer>
      </Container>
    </>
  );
};

export default Features;
