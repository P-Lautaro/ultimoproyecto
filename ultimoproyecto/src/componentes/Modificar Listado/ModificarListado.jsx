import React from "react";
import ReactDOM from "react-dom/client";
import './modifcarListado.css'
import { Link } from "react-router-dom";

export function ModificarListado () {
    return (
        <div>
            <Link to="/Tomar-Asistencia" className="modificarListado">
            <p className="text2">Tomar Asistencia</p>    
            </Link> 
        </div>
    )
}