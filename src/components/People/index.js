import React from "react";
import {
  Container,
  Title,
  Description,
  PeopleImage,
  Background,
} from "./peopleElements";
import peopleImage from "../../assets/people-image.png";
import background from "../../assets/people-bg.png";

const People = () => {
  return (
    <>
      <Container>
        <Background src={background} />
        <Title>Supported by real people</Title>
        <Description>
          Our team of Happiness Engineers works remotely from 58 countries
          providing customer support across multiple time zones.
        </Description>
        <PeopleImage src={peopleImage} />
      </Container>
    </>
  );
};

export default People;
