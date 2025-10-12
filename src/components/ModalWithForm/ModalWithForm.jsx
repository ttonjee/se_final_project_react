import React, { useEffect } from "react";
import CloseIcon from "../../assets/close.png";
import "../Header/Header.css";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  alternativeButton,
  titleText,
  isOpen,
  handleClose,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button
          type="button"
          className="modal__close-button"
          onClick={handleClose}
        >
          <img src={CloseIcon} alt="Close" className="modal__close-icon" />
        </button>
        <h2 className="modal__title">{titleText}</h2>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          {(buttonText || alternativeButton) && (
            <div className="modal__button-row">
              {buttonText && (
                <button type="submit" className="modal__submit">
                  {buttonText}
                </button>
              )}
              {alternativeButton}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
