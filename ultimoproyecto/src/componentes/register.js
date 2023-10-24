import React, { Component, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client'
import 'register.css'
export default function Register () {
    // Validar contraseña: al menos 6 caracteres, una mayúscula y un número
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{12,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("La contraseña debe tener al menos 12 caracteres, una letra mayúscula y un número.");
      return;
    }

    // Validar correo electrónico
    if (!email.includes("@")) {
        setEmailError("El correo electrónico debe contener un '@'.");
        return;
      }

    if (email.endsWith("gmail.com")) {
        // La dirección de correo es de Gmail, no necesitas hacer nada adicional.
    } else if (email.endsWith("yahoo.com") || email.endsWith("outlook.com") || email.endsWith("hotmail.com")) {
        // La dirección de correo es de Yahoo Mail, Outlook o Hotmail, no necesitas hacer nada adicional.
    } else {
        // La dirección de correo no es de ningún proveedor permitido.
        setEmailError("El correo electrónico debe terminar con 'gmail.com', 'yahoo.com', 'outlook.com' o 'hotmail.com'.");
    return;
    }

    if (lname.length > 24) {
        setLnameError("El apellido no puede tener más de 24 caracteres.");
        return;
    }

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
                </div>
                <div className="mb-3">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Apellido"
                    onChange={(e) => setLname(e.target.value)}
                    />
                    {lnameError && (
                    <p style={{ color: 'red' }}>{lnameError}</p>
                    )}
                </div>
                <div className="mb-3">
                    <input
                    type="email"
                    className="form-control"
                    placeholder="Correo Electronico"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && (
                    <p style={{ color: 'red' }}>{emailError}</p>
                    )}
                </div>
                <div className="mb-3">
                    <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && (
                    <p style={{ color: 'red' }}>{passwordError}</p>
                    )}
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                    Registrarse
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Ya estás registrado? <a href="/sign-in">Ingresar</a>
                </p>
                </form>
            </div>
        </div>
    )
}