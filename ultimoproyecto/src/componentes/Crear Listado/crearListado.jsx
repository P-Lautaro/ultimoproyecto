import React from "react";
import ReactDOM from "react-dom/client";
import './CrearLstado.css'
import { Link } from "react-router-dom";

export function CrearListado () {
    return (
        <Link to="/Crear-Listado" className="CrearListado"><p>Crear y Modificar Listado</p></Link>
    )
}