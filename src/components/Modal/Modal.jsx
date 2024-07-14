import { useContext, useEffect } from "react";
import styled from "styled-components";
import closeBtn from "../../assets/close.png";
import TextInput from "../Inputs/TextInput";
import OptionInput from "../Inputs/OptionInput";
import ModalButton from "./ModalButton";
import { GlobalContext } from "../../context/GlobalContextProvider";

const Overlay = styled.div`
  background-color: var(--shadow-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
`;

const DialogStyles = styled.dialog`
  position: absolute;
  top: 60px;
  width: 90%;
  z-index: 4;
  margin: 0 auto;
  border-radius: 15px;
  border: 3px solid #6bd1ff;
  padding: 60px 30px;
  background-color: var(--background-modal);

  @media (width > 1024px) {
    width: 70%;
    top: 150px;
    padding: 60px 100px;
  }
`;

const FormStyles = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const TitleStyles = styled.legend`
  color: var(--main-color-blue);
  font-size: 3.2rem;
  font-weight: bold;
  text-transform: uppercase;

  @media (width > 1024px) {
    font-size: 6rem;
    align-self: flex-start;
  }
`;

const ButtonClose = styled.button`
  position: absolute;
  top: -30px;
  right: 4px;
  height: 50px;
  width: 50px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 100%;
  }

  @media (width > 1024px) {
    right: -60px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (width > 1024px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;

const Modal = ({ video, closeModal }) => {
  const {
    title,
    image,
    category,
    videoLink,
    description,
    handleInputChange,
    updateVideoInfo,
    clearInputs,
  } = useContext(GlobalContext);

  useEffect(() => {
    const getInitialValue = () => {
      if (video) {
        handleInputChange("titulo", video.titulo || "");
        handleInputChange("categoria", video.Categoria || "");
        handleInputChange("imagen", video.linkImagenVideo || "");
        handleInputChange("video", video.linkVideo || "");
        handleInputChange("descripcion", video.descripcion || "");
      }
    };

    getInitialValue();
  }, [video]);

  const handleSubmit = (e) => {
    let id = video.id;
    let info = { title, image, category, videoLink, description, id };

    updateVideoInfo(info);
    closeModal();
  };

  return (
    <>
      {video && (
        <>
          <Overlay />
          <DialogStyles open={!!video}>
            <FormStyles method="dialog" onSubmit={handleSubmit}>
              <ButtonClose type="button" onClick={closeModal}>
                <img src={closeBtn} alt="Cerrar" />
              </ButtonClose>
              <TitleStyles>Editar card</TitleStyles>

              <TextInput
                inputValue={title}
                placeholder="Título del video"
                from="modal"
                name="titulo"
                minlength="3"
                title="tienes que tener al menos 3 caracteres para ser valido"
              >
                Título
              </TextInput>
              <OptionInput
                inputValue={category}
                placeholder="Escoja una categoría"
                from="modal"
                name="categoria"
              >
                Categoria
              </OptionInput>
              <TextInput
                inputValue={image}
                placeholder="link de la imagen"
                type="url"
                from="modal"
                name="imagen"
              >
                Imagen
              </TextInput>
              <TextInput
                inputValue={videoLink}
                placeholder="Link del video"
                type="url"
                from="modal"
                name="video"
                pattern="^https:\/\/www\.youtube\.com\/watch\?v=.*$"
                title="Por favor coloca una Url de youtube"
              >
                Video
              </TextInput>
              <TextInput
                inputValue={description}
                big
                placeholder="¿De qué se trata este vídeo?"
                from="modal"
                name="descripcion"
                minlength="3"
                maxlength="6000"
              >
                Descripción
              </TextInput>
              <ButtonContainer>
                <ModalButton text={"Guardar"} type="submit" main />
                <ModalButton
                  text={"Limpiar"}
                  OnClick={clearInputs}
                  type="button"
                />
              </ButtonContainer>
            </FormStyles>
          </DialogStyles>
        </>
      )}
    </>
  );
};

export default Modal;
