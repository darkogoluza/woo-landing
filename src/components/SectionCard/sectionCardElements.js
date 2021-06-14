import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const ImageContainer = styled.div`
  position: relative;
`;
export const Image = styled.img`
  position: relative;
  z-index: 2;
  box-shadow: -25px 20px 44px rgba(84, 48, 209, 0.4);

  border-radius: 20px;
  overflow: hidden;
`;
export const ImageBlur = styled.img`
  position: absolute;
  left: -1.5625rem;
  bottom: -4.6875rem;

  margin-bottom: 3.4375rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContentContainer = styled.div`
  width: 480px;
`;
export const Title = styled.h1`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: bold;
  font-size: 2.25rem;
  line-height: 2.875rem;

  color: white;

  margin-bottom: 0.8125rem;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.875rem;

  color: white;
  margin-bottom: 2.4375rem;
`;
export const Button = styled.button`
  padding: 1.375rem 1.625rem;

  background-color: ${(props) => props.theme.green};

  border: none;
  outline: none;
  border-radius: 100px;

  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.3125rem;

  text-align: center;

  color: white;

  cursor: pointer;
`;
