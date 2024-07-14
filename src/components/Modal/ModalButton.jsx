import styled from "styled-components";

const ButtonStyles = styled.button`
  width: 180px;
  font-size: 2rem;
  text-transform: uppercase;
  border-radius: 10px;
  height: 54px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) =>
    props.$main ? "var(--secondary-background-dark-blue)" : "transparent"};
  border: ${(props) =>
    props.$main
      ? "2px solid var(--main-color-blue)"
      : "2px solid var(--secondary-white)"};
  color: ${(props) =>
    props.$main ? "var(--main-color-blue)" : "var(--secondary-white)"};
  box-shadow: ${(props) =>
    props.$main ? "inset 0px 0px 12px 2px rgb(34, 113, 209)" : ""};

  &:disabled {
    border: 2px solid var(--main-gray);
    box-shadow: inset 0px 0px 12px 2px var(--main-gray);
    color: var(--secondary-white);
    cursor: not-allowed;
  }
`;

const ModalButton = ({ text, main, type, OnClick }) => {
  return (
    <>
      {OnClick ? (
        <ButtonStyles onClick={() => OnClick()} type={type} $main={main}>
          {text}
        </ButtonStyles>
      ) : (
        <ButtonStyles type={type} $main={main}>
          {text}
        </ButtonStyles>
      )}
    </>
  );
};

export default ModalButton;
