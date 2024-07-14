import addActive from "../assets/add-active.png";
import homeActive from "../assets/home-active.png";
import addInactive from "../assets/add-inactive.png";
import homeInactive from "../assets/home-inactive.png";
import Button from "./Button";
import styled from "styled-components";
import { HOME, CREATE } from "../routes/Paths";

const HeaderStyles = styled.header`
  width: 100%;
  height: auto;
  background-color: var(--secondary-background-dark-blue);
  position: fixed;
  bottom: 0;
  display: flex;
  padding: 20px 20px;
  justify-content: center;
  align-items: center;
  z-index: 10;

  @media (width > 1024px) {
    position: relative;
    justify-content: space-between;
    padding: 20px 30px;
  }
`;

const ShadowStyles = styled.div`
  width: 100%;
  height: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--main-color-blue);

  @media (width > 1024px) {
    bottom: 0;
    top: auto;
  }
`;

export const LogoStyles = styled.img`
  display: none;

  @media (width > 1024px) {
    display: block;
    height: 40px;
    width: auto;
  }
`;

const ButtonContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (width > 1024px) {
    width: auto;
    gap: 25px;
  }
`;

const Header = ({ logo }) => {
  return (
    <HeaderStyles>
      <ShadowStyles />
      <LogoStyles src={logo} alt="Aluraflix" />
      <ButtonContainer>
        <Button
          path={HOME}
          iconActive={homeActive}
          iconInactive={homeInactive}
          text={"Home"}
        />
        <Button
          path={CREATE}
          iconActive={addActive}
          iconInactive={addInactive}
          text={"Nuevo video"}
        />
      </ButtonContainer>
    </HeaderStyles>
  );
};

export default Header;
