import React from "react";
import CloseIcon from "../../assets/close.svg";
import "../Header/Header.css";
import "./ModalWithForm.css";

function ModalWithForm({
  buttonText,
  alternativeButton,
  titleText,
  isOpen,
  handleClose,
  onSubmit,
  children,
  containerClassName = "",
  formClassName = "",
  titleClassName = "",
}) {
  return (
    <div className={`modal ${isOpen ? "modal--opened" : ""}`}>
      <div className={`modal__container ${containerClassName}`}>
        <button
          type="button"
          className="modal__close-button"
          onClick={handleClose}
        >
          <img src={CloseIcon} alt="Close" className="modal__close-icon" />
        </button>
        <h2 className={`modal__title ${titleClassName}`}>{titleText}</h2>
        <form onSubmit={onSubmit} className={`modal__form ${formClassName}`}>
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
