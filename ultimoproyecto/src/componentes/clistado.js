import React, { useEffect, useState } from "react";
import { Nav } from "./Nav/nav";
import './Crear Listado/CrearLstado.css';

export default function Cistado() {
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

  const handleEliminarAlumno = (index) => {
    const nuevosAlumnos = [...alumnos];
    nuevosAlumnos.splice(index, 1);
    setAlumnos(nuevosAlumnos);
  };

  const isCamposCompletos =
    nuevoAlumno.nombre &&
    nuevoAlumno.apellido &&
    nuevoAlumno.dni;

  return (
    <div>
      <Nav Infoh1="Asistencia de Alumnos" />
      <div className="listado">
        <div>
          <h2 className="titulo">Crear Listado</h2>
          <table className="tabla">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>D.N.I</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno, index) => (
                <tr key={index}>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.apellido}</td>
                  <td>{alumno.dni}</td>
                  <td>
                    <button onClick={() => handleEliminarAlumno(index)}>Eliminar</button>
                  </td>
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
                      if (/^\d{0,10}$/.test(newValue)) {
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
  );
}
