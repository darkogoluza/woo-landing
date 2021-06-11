import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px ${(props) => props.theme.navSidePadding};
  padding-top: 2.3125rem;
`;
export const Logo = styled.img``;
export const NavLink = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.3125rem;

  text-decoration: none;

  color: ${(props) => props.theme.textColor};

  margin-right: 2.375rem;
  &:last-child {
    margin-right: 0;
  }
`;
export const NavLinksContainer = styled.div`
  flex-grow: 1;
  margin-left: 9rem;
`;
export const LogInBtn = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.3125rem;

  color: ${(props) => props.theme.textColor};

  outline: none;
  border: none;

  cursor: pointer;

  background-color: transparent;

  margin-right: 2.375rem;
`;

export const GetStartedBtn = styled.button`
  width: 7.5rem;
  height: 2.9375rem;

  outline: none;
  border: none;

  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.3125rem;

  color: white;

  background: ${(props) => props.theme.purple};
  border-radius: 0.3125rem;

  margin-right: 1.875rem;

  cursor: pointer;
`;
export const SearchIcon = styled.button`
  width: 1rem;
  height: 1rem;

  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  outline: none;
  border: none;

  cursor: pointer;

  background-color: transparent;
`;
