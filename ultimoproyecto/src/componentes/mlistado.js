import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Nav } from "./Nav/nav";
import appFirebase from "../firebase/firebase.config"; 
import { getDatabase, ref, get } from "firebase/database";
import './Modificar Listado/modifcarListado.css'

export default function MListado (){
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const dbRef = ref(getDatabase(appFirebase), "alumnos");
          
         
    const snapshot = await get(dbRef);
          if (snapshot.exists()) {
            setAlumnos(snapshot.val());
          }
        };
    
        fetchData();
      }, []);
    
    
    const updateAttendance = (index, status) => {
        const updatedAlumnos = [...alumnos];
        updatedAlumnos[index].status = status;

    const dbRef = ref(getDatabase(appFirebase), "alumnos");
        set(dbRef, updatedAlumnos);
        setAlumnos(updatedAlumnos);
    };

    return (
        <div>
            <Nav Infoh1="Asistencia de Alumnos"/>
            <div className="Modificar">
                <h2 className="titulo">Modificar Listado</h2>
                <table className="tabla">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>D.N.I</th>
                    <th>Asistencia</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map((alumno, index) => (
                    <tr key={index}>
                        <td>{alumno.nombre}</td>
                        <td>{alumno.apellido}</td>
                        <td>{alumno.dni}</td>
                        <td>
                        <select
                            value={alumno.status || "Presente"}
                            onChange={(e) => updateAttendance(index, e.target.value)}
                        >
                            <option value="Presente">Presente</option>
                            <option value="Ausente">Ausente</option>
                        </select>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}