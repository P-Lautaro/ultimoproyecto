import React, { Component, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client'
import './register.css'

export default function Register() {
  const [fname, setFname] = useState(""); // Primer nombre
  const [lname, setLname] = useState(""); // Apellido
  const [email, setEmail] = useState(""); // Correo electrónico
  const [password, setPassword] = useState(""); // Contraseña
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [fnameError, setFnameError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar nombre: al menos 3 caracteres y menos de 24 caracteres
    if (fname.length < 3 || fname.length > 24) {
      setFnameError("El nombre debe tener al menos 3 caracteres y menos de 24 caracteres.");
      return;
    } else {
      setFnameError("");
    }

    // Validar contraseña: al menos 12 caracteres, una mayúscula y un número
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{12,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("La contraseña debe tener al menos 12 caracteres, una letra mayúscula y un número.");
      return;
    } else {
      setPasswordError("");
    }

    // Validar correo electrónico
    if (!email.includes("@")) {
      setEmailError("El correo electrónico debe contener un '@'.");
    } else if (
      email.endsWith("gmail.com") ||
      email.endsWith("yahoo.com") ||
      email.endsWith("outlook.com") ||
      email.endsWith("hotmail.com")
    ) {
      setEmailError("");
    } else {
      setEmailError("El correo electrónico debe terminar con 'gmail.com', 'yahoo.com', 'outlook.com' o 'hotmail.com'.");
      return;
    }

    // Validar apellido
    if (lname.length > 24) {
      setLnameError("El apellido no puede tener más de 24 caracteres.");
      return;
    } else {
      setLnameError("");
    }
  };

  return (
    <div>
      <div className="auth-inn">
        <form onSubmit={handleSubmit}>
          <h3 className="titleR">Registrarse</h3>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              onChange={(e) => setFname(e.target.value)}
            />
            {fnameError && <p style={{ color: 'red' }}>{fnameError}</p>}
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              onChange={(e) => setLname(e.target.value)}
            />
            {lnameError && <p style={{ color: 'red' }}>{lnameError}</p>}
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Correo Electronico"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
          </div>
          <p className="forgot-password">
            ¿Ya estás registrado? <a href="/">Ingresar</a>
          </p>
        </form>
      </div>
    </div>
  );
}

  