import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Nav } from "./Nav/nav";
import './Crear Listado/CrearLstado.css'
export default function Cistado (){
    const [alumnos, setAlumnos] = useState([]);
    const [nuevoAlumno, setNuevoAlumno] = useState({
      nombre: "",
      apellido: "",
      dni: "",
    });

    const handleAgregarAlumno = () => {
        const nuevosAlumnos = [...alumnos];
        nuevosAlumnos.push(nuevoAlumno);
        setAlumnos(nuevosAlumnos);

        setNuevoAlumno({
            nombre: "",
            apellido: "",
            dni: "",
          });
    };

    const isCamposCompletos =
    nuevoAlumno.nombre &&
    nuevoAlumno.apellido &&
    nuevoAlumno.dni;

    return (
        <div>
            <Nav Infoh1="Asistencia de Alumnos"/>
            <div className="listado">
                <div >
                    <h2 className="titulo">Crear Listado</h2>
                    <table className="tabla">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>D.N.I</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {alumnos.map((nota, index) => (
                            <tr key={index}>
                                <td>{nota.nombre}</td>
                                <td>{nota.apellido}</td>
                                <td>{nota.dni}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>
                                <input
                                type="text"
                                value={nuevoAlumno.nombre}
                                onChange={(e) =>
                                    setNuevoAlumno({ ...nuevoAlumno, nombre: e.target.value })
                                }
                                />
                            </td>
                            <td>
                                <input
                                type="text"
                                value={nuevoAlumno.apellido}
                                onChange={(e) =>
                                    setNuevoAlumno({ ...nuevoAlumno, apellido: e.target.value })
                                }
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={nuevoAlumno.dni}
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        if (/^\d{0,10}$/.test(newValue)) { // Validar que solo se ingresen números y como máximo 10 caracteres
                                        setNuevoAlumno({ ...nuevoAlumno, dni: newValue });
                                        }
                                    }}
                                    pattern="\d*"
                                    maxLength="10"
                                />
                            </td>
                            <td>
                                <button
                                onClick={handleAgregarAlumno}
                                disabled={!isCamposCompletos}
                                >
                                +
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}