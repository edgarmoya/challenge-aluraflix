import styled from "styled-components";

const Button = styled.button`
  height: 28px;
  display: flex;
  gap: 20px;
  background: none;
  border: none;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.span`
  color: var(--secondary-white);
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const CardButton = ({ img, text, video, OnClick }) => {
  return (
    <Button onClick={() => OnClick(video)}>
      <img src={img} alt={`Icon ${text}`} />
      <Text>{text}</Text>
    </Button>
  );
};

export default CardButton;
