import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import CardAutoModal from "../CardAutoModal/CardAutoModal";

const StyleModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  img {
    max-width: calc(80vw - 46px);
    max-height: calc(80vh - 45px);
  }
`;
const modalRoot = document.querySelector(".Modal-root");

const Modal = ({ value, closeModalWindow }) => {
  const handlerOverlay = (evt) => {
    if (evt.target.localName === "div") {
      closeModalWindow();
    }
  };

  useEffect(() => {
    const handlerKeydown = (evt) => {
      if (evt.code === "Escape") {
        closeModalWindow();
      }
    };
    window.addEventListener("keydown", handlerKeydown);
    return () => {
      window.removeEventListener("keydown", handlerKeydown);
    };
  }, [closeModalWindow]);

  return createPortal(
    <StyleModal className="overlay" onClick={handlerOverlay}>
      <div className="modal">
        <CardAutoModal value={value} />
      </div>
    </StyleModal>,
    modalRoot
  );
};

export default Modal;
