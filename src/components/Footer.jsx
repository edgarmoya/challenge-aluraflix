import styled from "styled-components";
import { LogoStyles } from "../components/Header";

const FooterStyles = styled.footer`
  position: relative;
  width: 100%;
  height: auto;
  display: none;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-background-dark-blue);

  @media (width > 1024px) {
    display: flex;
  }
`;

const ShadowStyles = styled.div`
  width: 100%;
  height: 2px;
  position: absolute;
  top: 0;
  background-color: var(--main-color-blue);
`;

const Footer = ({ logo }) => {
  return (
    <FooterStyles>
      <ShadowStyles />
      <LogoStyles src={logo} alt="Logo Aluraflix" />
    </FooterStyles>
  );
};

export default Footer;
