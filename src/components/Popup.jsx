import styled from "styled-components";
import error from "../assets/close.png";
import success from "../assets/check-circle.svg";

const PopupStyles = styled.div`
  position: fixed;
  align-self: center;
  width: 80%;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--secondary-background-dark-blue);
  color: var(--secondary-white);
  font-size: 3rem;
  border: 6px solid var(--main-color-blue);
  border-radius: 20px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  z-index: 10;

  @media (width > 1024px) {
    width: 700px;
  }
`;

const Image = styled.img`
  color: inherit;
`;

const Text = styled.p`
  text-align: center;
`;

const Popup = ({ message, type }) => {
  const icon = type === "error" ? error : success;
  return (
    <PopupStyles>
      <Image src={icon} alt={`Icon ${type}`} />
      <Text>{message}</Text>
    </PopupStyles>
  );
};

export default Popup;
