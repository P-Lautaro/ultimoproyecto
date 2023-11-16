import React, { useEffect, useState } from "react";
import "firebase/database";
import appFirebase from "../firebase/firebase.config";
import { getDatabase, ref, set, get } from "firebase/database";
import { Nav } from "./Nav/nav";
import './Crear Listado/CrearLstado.css';

export default function Listado() {
  const [alumnos, setAlumnos] = useState([]);
  const [nuevoAlumno, setNuevoAlumno] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    curso: "", // Agrega el estado para el curso
  });

  const isCamposCompletos =
    nuevoAlumno.nombre.length >= 3 &&
    nuevoAlumno.apellido.length >= 6 &&
    nuevoAlumno.dni.length >= 8 &&
    nuevoAlumno.curso !== ""; // Agrega el chequeo para el curso

  useEffect(() => {
    if (isCamposCompletos) {
      const nuevosAlumnos = [...alumnos, nuevoAlumno];

      const dbRef = ref(getDatabase(appFirebase), "alumnos");
      set(dbRef, nuevosAlumnos);

      setAlumnos(nuevosAlumnos);
      setNuevoAlumno({
        nombre: "",
        apellido: "",
        dni: "",
        curso: "",
      });
    }
  }, [isCamposCompletos]);

  useEffect(() => {
    const dbRef = ref(getDatabase(appFirebase), "alumnos");
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        const existingAlumnos = snapshot.val();
        setAlumnos(existingAlumnos || []);
      }
    });
  }, []);

  const handleEliminarAlumno = (index) => {
    const nuevosAlumnos = [...alumnos];
    nuevosAlumnos.splice(index, 1);

    const dbRef = ref(getDatabase(appFirebase), "alumnos");
    set(dbRef, nuevosAlumnos);

    setAlumnos(nuevosAlumnos);
  };

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
                <th>Curso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno, index) => (
                <tr key={index}>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.apellido}</td>
                  <td>{alumno.dni}</td>
                  <td>{alumno.curso}</td>
                  <td>
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
                      setNuevoAlumno({ ...nuevoAlumno, dni: e.target.value });
                    }}
                    maxLength="10"
                  />
                </td>
                <td>
                  <select
                    className="asistencia-curso"
                    value={nuevoAlumno.curso}
                    onChange={(e) =>
                      setNuevoAlumno({ ...nuevoAlumno, curso: e.target.value })
                    }
                  >
                    <option value="">Cursos</option>
                     {/*1ros*/}
                     <option value="1ro 1ra">1ro 1ra</option>
                      <option value="1ro 2da">1ro 2da</option>
                      <option value="1ro 3ra">1ro 3ra</option>
                      <option value="1ro 4ta">1ro 4ta</option>
                      <option value="1ro 5ta">1ro 5ta</option>
                      {/*2dos*/}
                      <option value="2do 1ra">2do 1ra</option>
                      <option value="2do 2da">2do 2da</option>
                      <option value="2do 3ra">2do 3ra</option>
                      <option value="2do 4ta">2do 4ta</option>
                      {/*3ros*/}
                      <option value="3ro 1ra">3ro 1ra</option>
                      <option value="3ro 2da">3ro 2da</option>
                      <option value="3ro 3ra">3ro 3ra</option>
                      <option value="3ro 4ta">3ro 4ta</option>
                      {/*4tos*/}
                      <option value="4to 1ra">4to 1ra</option>
                      <option value="4to 2da">4to 2da</option>
                      <option value="4to 3ra">4to 3ra</option>
                      <option value="4to 4ta">4to 4ta</option>
                      {/*5tos*/}
                      <option value="5to 1ra">5to 1ra</option>
                      <option value="5to 2da">5to 2da</option>
                      <option value="5to 3ra">5to 3ra</option>
                      <option value="5to 4ta">5to 4ta</option>
                      {/*6tos*/}
                      <option value="6to 1ra">6to 1ra</option>
                      <option value="6to 2da">6to 2da</option>
                      <option value="6to 3ra">6to 3ra</option>
                      <option value="6to 4ta">6to 4ta</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
