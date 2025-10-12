

import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignInModal({ isOpen, onClose, onSignIn, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setErrors({});
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password && password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    onSignIn({ email, password });
  };

  return (
    <ModalWithForm
      titleText="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      handleClose={handleClose}
      onSubmit={handleSubmit}
      alternativeButton={
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
      }
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input-line"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>

      <label className="modal__label">
        Password
        <input
          className="modal__input-line"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
        {errors.password && <span className="modal__error">{errors.password}</span>}
      </label>
    </ModalWithForm>
  );
}

export default SignInModal;
