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
    return (
        <div>

        </div>
    )
}