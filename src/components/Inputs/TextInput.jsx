import { useContext } from "react";
import styled, { css } from "styled-components";
import { GlobalContext } from "../../context/GlobalContextProvider";

const LabelStyles = styled.label`
  width: 100%;
  color: var(--secondary-white);
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 2rem;
  font-weight: bold;

  @media (min-width: 1024px) {
    width: ${(props) => (props.$from === "modal" ? "100%" : "47%")};
  }
`;

const InputStyles = styled.input`
  font-family: "Source sans Pro", sans-serif;
  border-radius: 10px;
  height: 62px;
  font-size: 2rem;
  font-weight: 300;
  background: none;
  padding: 16px 10px;
  color: var(--secondary-white);
  border: ${(props) =>
    props.$from === "modal"
      ? "3px solid var(--main-color-blue)"
      : "3px solid var(--main-gray)"};

  ${(props) => {
    if (props.$error) {
      return css`
        &:invalid {
          border: 3px solid var(--error-color);
        }
      `;
    }
  }}
`;

const TextAreaStyles = styled.textarea`
  font-family: "Source sans Pro", sans-serif;
  height: 155px;
  border-radius: 10px;
  width: 100%;
  font-size: 2rem;
  font-weight: 300;
  background: none;
  padding: 16px 10px;
  color: var(--secondary-white);
  border: ${(props) =>
    props.$from === "modal"
      ? "3px solid var(--main-color-blue)"
      : "3px solid var(--main-gray)"};
  scrollbar-width: thin;
  resize: vertical;
  scrollbar-color: var(--main-color-blue) var(--scrollbar-color);

  ${(props) => {
    if (props.$error) {
      return css`
        &:invalid {
          border: 3px solid var(--error-color);
        }
      `;
    }
  }}
`;

const ErrorStyles = styled.span`
  font-size: 1.5rem;
  text-align: start;
  font-weight: 800;
  color: var(--error-color);
`;

const TextInput = ({
  children,
  type = "text",
  from = "",
  placeholder,
  inputValue = "",
  big,
  name,
  pattern,
  minlength,
  maxlength,
  title,
}) => {
  const { handleInputChange, errorMessages, verifyField } =
    useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
    verifyField(e.target);
  };

  const inputProps = {
    $error: errorMessages[name],
    $from: from,
    type: type,
    value: inputValue,
    placeholder: placeholder,
    onChange: handleChange,
    name: name,
    required: true,
    pattern: pattern,
    minLength: minlength,
    maxLength: maxlength,
    title: title,
  };

  return (
    <LabelStyles $from={from}>
      {children}
      {big ? (
        <TextAreaStyles {...inputProps} />
      ) : (
        <InputStyles {...inputProps} />
      )}
      {errorMessages[name] && <ErrorStyles>{errorMessages[name]}</ErrorStyles>}
    </LabelStyles>
  );
};

export default TextInput;
