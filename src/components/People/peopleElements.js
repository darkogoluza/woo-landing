import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  overflow: hidden;

  position: relative;
`;
export const Title = styled.h1`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: bold;
  font-size: 3.4375rem;
  line-height: 4.375rem;

  text-align: center;

  color: ${(props) => props.theme.textColor};

  margin-bottom: 2rem;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5625rem;

  text-align: center;

  color: ${(props) => props.theme.gray};
  width: 660px;
`;
export const PeopleImage = styled.img`
  margin: auto;
  width: 70%;
`;
export const Background = styled.img`
  position: absolute;

  bottom: -140px;
  z-index: -1;

  width: 90%;
  margin: auto;
`;
