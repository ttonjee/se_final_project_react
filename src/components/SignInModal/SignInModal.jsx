import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignInModal({ isOpen, onClose, onSignIn, onSwitchToRegister }) {
  console.log("SignInModal isOpen:", isOpen);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn({ email, password });
    // Basic validation
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSignIn({ email, password });
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
      titleText="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      handleClose={handleClose}
      onSubmit={handleSubmit}
      alternativeButton={
        <p className="modal__text">
          or{" "}
          <a
            href="#register"
            className="modal__link"
            onClick={(e) => {
              e.preventDefault();
              onSwitchToRegister();
            }}
          >
            Sign up
          </a>
        </p>
      }
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input-line"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input-line"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
    </ModalWithForm>
  );
}

export default SignInModal;
