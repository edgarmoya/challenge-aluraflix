import { useContext, useEffect } from "react";
import styled from "styled-components";
import ModalButton from "../components/Modal/ModalButton";
import TextInput from "../components/Inputs/TextInput";
import OptionInput from "../components/Inputs/OptionInput";
import { GlobalContext } from "../context/GlobalContextProvider";
import Popup from "../components/Popup";

const AddContainer = styled.section`
  background-color: var(--main-background-black);
  width: 100%;
  padding: 10px 70px 50px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;

  @media (width > 1024px) {
    justify-content: center;
  }
`;

const MainTitleContainer = styled.div`
  text-align: center;
  color: var(--secondary-white);
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  gap: 10px;
  padding-top: 50px;

  h1 {
    font-size: 4rem;
    font-weight: bold;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const FormStyles = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;

  @media (width > 1024px) {
    flex-direction: row;
    justify-content: start;
    align-items: stretch;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-bottom: 100px;

  @media (width > 1024px) {
    justify-content: start;
    gap: 50px;
    padding: 10px 0;
  }
`;

const CreatePage = () => {
  const {
    title,
    image,
    category,
    videoLink,
    description,
    handleInputChange,
    createNewVideo,
    clearInputs,
    popup,
    setErrorMessages,
  } = useContext(GlobalContext);

  useEffect(() => {
    handleInputChange("titulo", "");
    handleInputChange("categoria", "");
    handleInputChange("imagen", "");
    handleInputChange("video", "");
    handleInputChange("descripcion", "");
    setErrorMessages({});
  }, []);

  const handleSubmit = () => {
    createNewVideo({ title, image, category, videoLink, description });
    clearInputs();
  };

  return (
    <AddContainer>
      <MainTitleContainer>
        <h1>Nuevo Video</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </MainTitleContainer>

      <FormStyles>
        <TextInput
          inputValue={title}
          placeholder="Título del video"
          name="titulo"
          minlength="3"
          title="Tienes que tener al menos 3 caracteres para ser válido"
        >
          Título*
        </TextInput>
        <OptionInput
          inputValue={category}
          placeholder="Escoja una categoría"
          name="categoria"
        >
          Categoría*
        </OptionInput>
        <TextInput
          inputValue={image}
          placeholder="Link de la imagen"
          type="url"
          name="imagen"
        >
          Imagen*
        </TextInput>
        <TextInput
          inputValue={videoLink}
          placeholder="Link del video"
          type="url"
          name="video"
          pattern="^https:\/\/www\.youtube\.com\/watch\?v=.*$"
          title="Por favor, inserte una url de youtube"
        >
          Video*
        </TextInput>
        <TextInput
          inputValue={description}
          big
          placeholder="¿De qué se trata este vídeo?"
          name="descripcion"
          minlength="2"
          maxlength="6000"
        >
          Descripción*
        </TextInput>
      </FormStyles>
      <ButtonContainer>
        <ModalButton text={"Guardar"} OnClick={handleSubmit} main />
        <ModalButton text={"Limpiar"} OnClick={clearInputs} type="button" />
      </ButtonContainer>
      {popup.show && <Popup message={popup.message} type={popup.type} />}
    </AddContainer>
  );
};

export default CreatePage;
