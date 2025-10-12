import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onLogin, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and call login handler
    setErrors({});
    onLogin({ email, password });
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <div className="modal__form">
        <label className="modal__label">
          Email
          <input
            className={`modal__input${errors.email ? " modal__input_error" : ""}`}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          {errors.email && (
            <span className="modal__error">{errors.email}</span>
          )}
        </label>

        <label className="modal__label">
          Password
          <input
            className={`modal__input${errors.password ? " modal__input_error" : ""}`}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          {errors.password && (
            <span className="modal__error">{errors.password}</span>
          )}
        </label>
      </div>

      <div className="modal__footer">
        <p className="modal__text">
          or{" "}
          <button
            type="button"
            className="modal__link"
            onClick={onSwitchToRegister}
          >
            Sign up
          </button>
        </p>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
