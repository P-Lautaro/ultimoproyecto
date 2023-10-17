import React from "react";
import ReactDOM from "react-dom/client";
import './modifcarListado.css'
import { Link } from "react-router-dom";

export function ModificarListado () {
    return (
        <Link to="/Tomar-Asistencia" className="modificarListado"><p>Tomar Asistencia</p></Link>
    )
}