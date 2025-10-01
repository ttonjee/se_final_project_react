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
      <div className="login-modal__form">
        <label className="login-modal__label">
          Email
          <input
            className={`login-modal__input ${
              errors.email ? "login-modal__input_error" : ""
            }`}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          {errors.email && (
            <span className="login-modal__error">{errors.email}</span>
          )}
        </label>

        <label className="login-modal__label">
          Password
          <input
            className={`login-modal__input ${
              errors.password ? "login-modal__input_error" : ""
            }`}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          {errors.password && (
            <span className="login-modal__error">{errors.password}</span>
          )}
        </label>
      </div>

      <div className="login-modal__footer">
        <p className="login-modal__text">
          or{" "}
          <button
            type="button"
            className="login-modal__link"
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
