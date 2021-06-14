import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 1000px;

  margin-top: 12.5rem;
`;
export const Background = styled.div`
  background-image: url(${(props) => props.src});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 1000px;

  position: absolute;
  z-index: -1;
`;
export const Title = styled.h1`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: bold;
  font-size: 3.4375rem;
  line-height: 4.375rem;

  text-align: center;

  color: ${(props) => props.theme.textColor};

  width: 560px;

  margin: auto;
`;
export const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-image: url(${(props) => props.src});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 730px;
  height: 439px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5.125rem;
`;
export const Description = styled.p`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: normal;
  font-size: 1.6687rem;
  line-height: 2.4375rem;

  text-align: center;

  color: ${(props) => props.theme.gray};
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  top: 72.5%;
  left: 62.5%;
  transform: translate(-50%, -50%);
`;
export const LeftArrow = styled.button`
  background-image: url(${(props) => props.src});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 1.9831rem;
  height: 0.9581rem;

  background-color: transparent;
  outline: none;
  border: none;

  margin-right: 1.75rem;
`;
export const RightArrow = styled.button`
  background-image: url(${(props) => props.src});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 3.2331rem;
  height: 1.5625rem;

  background-color: transparent;
  outline: none;
  border: none;
`;
