import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";
import GlobalContextProvider from "./context/GlobalContextProvider";
import styled from "styled-components";

const MainContainer = styled.main`
  height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <MainContainer>
        <Header logo={logo} />
        <GlobalContextProvider>
          <Outlet />
        </GlobalContextProvider>
        <Footer logo={logo} />
      </MainContainer>
    </>
  );
}

export default App;
