import styled from "styled-components";
import Banner from "../components/Banner";
import Courses from "../components/Courses/Courses";
import Modal from "../components/Modal/Modal";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";
import Popup from "../components/Popup";

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 100px;

  @media (width > 1024px) {
    padding-bottom: 0;
  }
`;

const DivStyles = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  font-size: 2.4rem;
  font-weight: bold;
  background-color: var(--main-background-black);
  color: var(--secondary-white);
  padding-top: 40px;
  padding-bottom: 140px;

  @media (width > 1024px) {
    padding-bottom: 0;
  }
`;

const HomePage = () => {
  const { categories, selectedVideo, setSelectedVideo, videos, popup } =
    useContext(GlobalContext);

  const categoriesWithVideos = categories.filter((category) =>
    videos.some((video) => video.Categoria === category.nombre)
  );

  return (
    <HomeContainer>
      <Banner />
      {videos.length > 0 ? (
        categoriesWithVideos.map((category) => (
          <Courses key={category.id} category={category} />
        ))
      ) : (
        <DivStyles>No hay videos que mostrar</DivStyles>
      )}
      <Modal video={selectedVideo} closeModal={() => setSelectedVideo(null)} />
      {popup.show && <Popup message={popup.message} type={popup.type} />}
    </HomeContainer>
  );
};

export default HomePage;
