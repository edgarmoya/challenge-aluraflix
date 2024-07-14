import styled from "styled-components";

const TitleStyles = styled.h2`
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 17px 0;
  width: 286px;
  border-radius: 15px;
  color: var(--secondary-white);
  background-color: ${(props) => props.$color};

  @media (width > 1024px) {
    font-size: 3.2rem;
    width: 432px;
  }
`;

const CourseTitle = ({ text, color }) => {
  return <TitleStyles $color={color}>{text}</TitleStyles>;
};

export default CourseTitle;
