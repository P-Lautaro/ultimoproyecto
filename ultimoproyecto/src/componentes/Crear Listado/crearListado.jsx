import React from "react";
import ReactDOM from "react-dom/client";
import './CrearLstado.css'
import { Link } from "react-router-dom";

export function CrearListado () {
    return (
        <Link to="/Cistado" className="CrearListado"><p>Crear Listado</p></Link>
    )
}