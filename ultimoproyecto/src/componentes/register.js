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

    return (
        <div>

        </div>
    )
}