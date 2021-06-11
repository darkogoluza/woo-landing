import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  position: relative;

  &:nth-child(1) {
    top: -100px;
  }
  &:nth-child(2) {
    top: -50px;
  }
`;
export const Image = styled.div`
  margin-bottom: 2.5rem;
  width: 100%;
  height: 200px;

  position: relative;

  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
export const Overlay = styled.img`
  position: absolute;

  transform: scale(0.75);

  top: ${(props) => props.y};
  left: ${(props) => props.x};

  z-index: 1;
`;
export const Title = styled.h1`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: bold;
  font-size: 2.25rem;
  line-height: 2.375rem;

  margin-bottom: 1rem;

  color: ${(props) => props.theme.textColor};
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.875rem;

  margin-bottom: 1.5625rem;

  color: ${(props) => props.theme.gray};
`;
export const Link = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.5625rem;

  color: ${(props) => props.theme.blue};
`;
