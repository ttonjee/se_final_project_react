import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onRegister, onSwitchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (!username) newErrors.username = "Username is required";
    if (password && password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and call register handler
    setErrors({});
    onRegister({ email, password, username });
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setUsername("");
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
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

        <label className="modal__label">
          Username
          <input
            className={`modal__input${errors.username ? " modal__input_error" : ""}`}
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
          {errors.username && (
            <span className="modal__error">{errors.username}</span>
          )}
        </label>
      </div>

      <div className="modal__footer">
        <p className="modal__text">
          or{" "}
          <button
            type="button"
            className="modal__link"
            onClick={onSwitchToLogin}
          >
            Sign in
          </button>
        </p>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
