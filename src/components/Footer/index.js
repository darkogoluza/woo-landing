import React from "react";
import {
  Container,
  TopSectionIcon,
  TopSection,
  TopSectionTitle,
  TopSectionTitleHigeLight,
  BottomSectionLink,
  BottomSectionContainer,
  BottomSection,
  BottomSectionTitle,
  Line,
  TopSectionContainer,
  TopSectionWrapper,
  Logo,
  BottomFooterSection,
  BottomFooterSectionLogo,
  Social,
  SocialIcon,
  CopyRight,
  CopyRightLink,
} from "./footerElements";
import footerIcon1 from "../../assets/footer-icon1.png";
import footerIcon2 from "../../assets/footer-icon2.png";
import footerIcon3 from "../../assets/footer-icon3.png";
import footerLogo from "../../assets/footer-logo.png";
import footerData from "../../data/footerData.json";
import social1 from "../../assets/social1.png";
import social2 from "../../assets/social2.png";
import social3 from "../../assets/social3.png";
import social4 from "../../assets/social4.png";
import footerLogo2 from "../../assets/footer-logo2.png";

const Footer = () => {
  return (
    <>
      <Container>
        <TopSection>
          <TopSectionContainer>
            <TopSectionWrapper>
              <TopSectionIcon src={footerIcon1} />
              <TopSectionTitle>
                30 day{" "}
                <TopSectionTitleHigeLight>
                  money back guarantee
                </TopSectionTitleHigeLight>
              </TopSectionTitle>
            </TopSectionWrapper>
            <TopSectionWrapper>
              <TopSectionIcon src={footerIcon2} />
              <TopSectionTitle>
                30 day{" "}
                <TopSectionTitleHigeLight>
                  money back guarantee
                </TopSectionTitleHigeLight>
              </TopSectionTitle>
            </TopSectionWrapper>
            <TopSectionWrapper>
              <TopSectionIcon src={footerIcon3} />
              <TopSectionTitle>
                30 day{" "}
                <TopSectionTitleHigeLight>
                  money back guarantee
                </TopSectionTitleHigeLight>
              </TopSectionTitle>
            </TopSectionWrapper>
          </TopSectionContainer>
          <Logo src={footerLogo} />
        </TopSection>
        <Line />
        <BottomSection>
          {footerData.map(({ title, links }, index) => {
            return (
              <BottomSectionContainer key={index}>
                <BottomSectionTitle>{title}</BottomSectionTitle>
                {links.map((linkText, index2) => {
                  return (
                    <BottomSectionLink href="#" key={index2}>
                      {linkText}
                    </BottomSectionLink>
                  );
                })}
              </BottomSectionContainer>
            );
          })}
        </BottomSection>
      </Container>
      <BottomFooterSection>
        <Social>
          <SocialIcon src={social1} />
          <SocialIcon src={social2} />
          <SocialIcon src={social3} />
          <SocialIcon src={social4} />
        </Social>
        <CopyRight>
          COPYRIGHT WOOCOMMERCE 2020 -{" "}
          <CopyRightLink href="#">TERMS & CONDITIONS</CopyRightLink>{" "}
          <CopyRightLink href="#">PRIVACY POLICY</CopyRightLink>
        </CopyRight>
        <BottomFooterSectionLogo src={footerLogo2} />
      </BottomFooterSection>
    </>
  );
};

export default Footer;
