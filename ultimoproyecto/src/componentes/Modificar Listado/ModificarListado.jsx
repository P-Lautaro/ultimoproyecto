import React from "react";
import ReactDOM from "react-dom/client";
import './modifcarListado.css'
import { Link } from "react-router-dom";

export function ModificarListado () {
    return (
        <Link to="/Modificar-Listado" className="modificarListado"><p>Modificar Listado</p></Link>
    )
}