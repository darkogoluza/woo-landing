import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${(props) => props.theme.purple};

  padding: 0 ${(props) => props.theme.sidePadding};
  padding-top: 2.8125rem;
  padding-bottom: 4rem;
`;
export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BottomSection = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    margin-right: 8.625rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

export const TopSectionContainer = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    margin-right: 7.375rem;
  }
  & > *:last-child {
    margin-right: 0;
  }

  margin-bottom: 8.4375rem;
`;
export const TopSectionWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #9a7dff;

  margin-bottom: 2.125rem;
`;
export const Logo = styled.img`
  margin-bottom: 3.5rem;
`;
export const TopSectionTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 3.25rem;

  color: white;
`;
export const TopSectionTitleHigeLight = styled.span`
  font-weight: bold;
`;
export const TopSectionIcon = styled.img`
  margin-right: 0.9375rem;
`;
export const BottomSectionTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 3.25rem;

  text-transform: uppercase;

  color: white;
`;
export const BottomSectionContainer = styled.div``;
export const BottomSectionLink = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.375rem;

  color: white;
  text-decoration: none;
  display: block;
`;

export const BottomFooterSection = styled.div`
  padding: 1.5625rem ${(props) => props.theme.sidePadding};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BottomFooterSectionLogo = styled.img``;
export const Social = styled.div`
  & > * {
    margin-right: 3.375rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;
export const SocialIcon = styled.img``;
export const CopyRight = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.375rem;

  text-align: center;

  color: ${(props) => props.theme.textColor};
`;
export const CopyRightLink = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.375rem;

  text-align: center;

  color: ${(props) => props.theme.textColor};
`;
