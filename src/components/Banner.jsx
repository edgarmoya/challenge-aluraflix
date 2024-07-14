import styled from "styled-components";
import CourseTitle from "./Courses/CourseTitle";

const BannerStyles = styled.section`
  width: 100%;
  height: auto;
  background-color: #6bd1ff;
  background-image: url("https://raw.githubusercontent.com/Diegodelias/challenge-one-aluraflix-latam/main/aluraflix/src/assets/Slider/slider1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  mix-blend-mode: multiply;
  box-shadow: inset 0px 0px 333px 75px #0b223f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 40px;
  gap: 30px;

  @media (width > 1024px) {
    flex-direction: row-reverse;
    padding: 210px 50px;
    gap: 40px;
    align-items: flex-end;
  }
`;

const ImgContainerStyles = styled.figure`
  position: relative;
  border-radius: 15px;
  width: 90%;
  overflow: hidden;

  @media (width > 1024px) {
    width: 459px;
    min-width: 459px;
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0px 0px 10px 8px #6bd1ff;
`;

const CourseImgStyles = styled.img`
  width: 100%;
`;

const DescriptionContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: var(--secondary-white);

  @media (width > 1024px) {
    width: auto;
    gap: 20px;
    align-items: start;
  }
`;

const DescriptionTitle = styled.h3`
  font-size: 3.2rem;
  font-weight: 600;

  @media (width > 1024px) {
    font-size: 4.2rem;
  }
`;

const DescriptionStyles = styled.p`
  font-size: 2.5rem;
  font-weight: 300;
`;

const Banner = () => {
  return (
    <BannerStyles>
      <ImgContainerStyles>
        <CourseImgStyles
          src="https://raw.githubusercontent.com/Diegodelias/challenge-one-aluraflix-latam/main/aluraflix/src/assets/thumbnails/bannerCard.png"
          alt="banner"
        />
        <Shadow />
      </ImgContainerStyles>
      <DescriptionContainer>
        <CourseTitle color="#6bd1ff" text={"Front end"} />
        <div>
          <DescriptionTitle>Challenge React</DescriptionTitle>
          <DescriptionStyles>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </DescriptionStyles>
        </div>
      </DescriptionContainer>
    </BannerStyles>
  );
};

export default Banner;
