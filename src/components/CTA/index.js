import React from "react";
import { Container, Title, TitleHighLight, Button } from "./CTAElements";

const CTA = () => {
  return (
    <>
      <Container>
        <Title>
          WooCommerce - the{" "}
          <TitleHighLight>most customizable eCommerce platform</TitleHighLight>{" "}
          for building <TitleHighLight>your online business.</TitleHighLight>
        </Title>
        <Button>GET STARTED</Button>
      </Container>
    </>
  );
};

export default CTA;
