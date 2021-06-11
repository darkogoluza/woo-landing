import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 1000px;
  position: relative;

  overflow: hidden;
`;
export const Gradient = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(229, 239, 255, 1) 0%,
    rgba(229, 239, 255, 0) 100%
  );
  position: absolute;
  z-index: -2;
`;

export const Background = styled.img`
  position: absolute;
  left: 49.84%;
  right: -41.88%;
  top: -9.72%;
  bottom: 81.76%;
  position: absolute;

  top: -50%;
  right: -50%;

  z-index: -1;
`;

export const ContentWrapper = styled.div`
  margin-top: 6rem;
  padding: 0 ${(props) => props.theme.sidePadding};
  display: flex;
`;
export const Content = styled.div`
  margin-top: 6rem;
  min-width: 550px;
`;
export const FeatureImage = styled.img`
  position: relative;
  left: 45px;
`;

export const Title = styled.h1`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: bold;
  font-size: 3.3125rem;
  line-height: 3.5rem;

  color: ${(props) => props.theme.textColor};

  margin-bottom: 1.8125rem;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1rem;

  color: ${(props) => props.theme.gray};

  margin-bottom: 1.9375rem;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;

  border: none;
  outline: none;

  padding: 1rem 2.5rem;
  border-radius: 100px;

  background-color: ${(props) => props.theme.purple};

  text-align: center;

  color: white;

  margin-right: 0.75rem;
`;
export const Link = styled.p`
  display: inline;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1rem;

  color: ${(props) => props.theme.gray};
`;
export const LinkHighLight = styled.a`
  display: inline;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1rem;

  text-decoration: none;

  color: ${(props) => props.theme.blue};
`;
export const LinkContainer = styled.div``;
