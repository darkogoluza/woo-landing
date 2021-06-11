import styled from "styled-components";

export const Container = styled.section``;
export const CardContainer = styled.ul`
  display: flex;
  justify-content: space-between;

  padding: 0px ${(props) => props.theme.sidePadding};

  margin-top: 1.5625rem;
`;
export const Title = styled.h1`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: bold;
  font-size: 3.4375rem;
  line-height: 4.375rem;

  width: 500px;

  margin: auto;

  position: relative;
  top: -100px;

  text-align: center;

  color: ${(props) => props.theme.textColor};
`;
