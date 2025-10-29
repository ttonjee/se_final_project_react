import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegistrationSuccessModal({ isOpen, onClose }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      handleClose={onClose}
      containerClassName="modal__container-success"
    >
      <h2 className="modal__title modal__title-success">
        Registration Successful!
      </h2>

      <div className="modal__button-row">
        <button type="button" className="modal__submit" onClick={onClose}>
          Close
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegistrationSuccessModal;
