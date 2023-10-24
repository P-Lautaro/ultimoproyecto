import React, { useEffect, useState } from "react";
import "firebase/database";
import appFirebase from "../firebase/firebase.config"; 
import { getDatabase, ref, set } from "firebase/database"; // Import the necessary functions from Firebase
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
    if (isCamposCompletos) {
      const nuevosAlumnos = [...alumnos];
      nuevosAlumnos.push(nuevoAlumno);

      const dbRef = firebase.database().ref("alumnos"); // Replace "alumnos" with your database path
      dbRef.set(nuevosAlumnos);

      setAlumnos(nuevosAlumnos);
      setNuevoAlumno({
        nombre: "",
        apellido: "",
        dni: "",
      });
    }
  };

  const handleEliminarAlumno = (index) => {
    const nuevosAlumnos = [...alumnos];
    nuevosAlumnos.splice(index, 1);

    const dbRef = firebase.database().ref("alumnos");
    dbRef.set(nuevosAlumnos);

    setAlumnos(nuevosAlumnos);
  };

  const isCamposCompletos =
    nuevoAlumno.nombre &&
    nuevoAlumno.apellido &&
    nuevoAlumno.dni;

    const dbRef = getDatabase(appFirebase);

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
                  <td >
                    <button className="btn-eliminar" 
                    onClick={() => handleEliminarAlumno(index)}
                    >Eliminar</button>
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
                    maxLength="15"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={nuevoAlumno.apellido}
                    onChange={(e) =>
                      setNuevoAlumno({ ...nuevoAlumno, apellido: e.target.value })
                    }
                    maxLength="15"
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
