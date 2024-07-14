import styled from "styled-components";
import { Link } from "react-router-dom";
import { HOME } from "../routes/Paths";

const Container = styled.div`
  background-color: var(--main-background-black);
  color: var(--secondary-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #257be5;
  text-shadow: 1px 1px 2px #515c69;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #fff;
`;

const HomeButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  padding: 10px 20px;
  text-decoration: none;
  border: 3px solid #fff;
  color: var(--secondary-white);
  background: none;

  &:hover {
    color: var(--main-color-blue);
    background-color: var(--button-shadow-color);
    border: 3px solid var(--main-color-blue);
  }
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Title>404 {":("}</Title>
      <Subtitle>Página no encontrada</Subtitle>
      <HomeButton to={HOME}>Volver al Inicio</HomeButton>
    </Container>
  );
};

export default NotFoundPage;
