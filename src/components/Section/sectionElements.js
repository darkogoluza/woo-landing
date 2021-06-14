import styled from "styled-components";

export const Container = styled.section`
  margin-top: 9.125rem;
`;
export const Wrapper = styled.div`
  padding: 0 9.0625rem;
`;

export const Background = styled.div`
  width: 100%;
  height: 1100px;

  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;

  z-index: -1;
`;
