import React from "react";
import {
  Container,
  GetStartedBtn,
  LogInBtn,
  Logo,
  NavLink,
  NavLinksContainer,
  SearchIcon,
} from "./navElements";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/icon-search.png";

const Nav = () => {
  return (
    <>
      <Container>
        <Logo src={logo} alt="Woo Commarce" />
        <NavLinksContainer>
          <NavLink href="#">Sell</NavLink>
          <NavLink href="#">Marketplace</NavLink>
          <NavLink href="#">Community</NavLink>
          <NavLink href="#">Develop</NavLink>
          <NavLink href="#">Resources</NavLink>
        </NavLinksContainer>
        <LogInBtn>Log In</LogInBtn>
        <GetStartedBtn>Get Started</GetStartedBtn>
        <SearchIcon src={searchIcon} />
      </Container>
    </>
  );
};

export default Nav;
