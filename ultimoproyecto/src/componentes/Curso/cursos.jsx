import React, { useState, useRef, useEffect } from "react";
import './curso.css'

export function Curso () {
    return(
        <div>
        <select className="asistencia-curso"
            value="Curso">
                <option value="">Curso</option>
                <option value="61">6to 1ra</option>
                <option value="62">6to 2da</option>
                <option value="63">6to 3ra</option>
                <option value="64">6to 4ta</option>
        </select>
        </div>
    )
}