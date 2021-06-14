import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 4.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5f37ef;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 2.25rem;
  line-height: 3.25rem;

  color: white;

  max-width: 955px;
`;
export const TitleHighLight = styled.span`
  font-weight: bold;
`;
export const Button = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.3125rem;

  text-align: center;

  color: white;

  padding: 1.625rem 2.875rem;

  outline: none;
  border: 1px solid white;
  border-radius: 200px;
  background-color: transparent;
`;
