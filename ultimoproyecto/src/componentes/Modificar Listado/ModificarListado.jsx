import React from "react";
import ReactDOM from "react-dom/client";
import './modificarListado.css'
import { Link } from "react-router-dom";

export function ModificarListado () {
    return (
        <Link to="/" className="modificarListado"><p>Modificar Listado</p></Link>
    )
}