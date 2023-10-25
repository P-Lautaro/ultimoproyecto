import React, { useEffect, useState } from "react";
import { Nav } from "./Nav/nav";
import appFirebase from "../firebase/firebase.config"; 
import { getDatabase, ref, get, set } from "firebase/database";
import './Modificar Listado/modifcarListado.css';

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
            <div className="Modificar">
                <h2 className="titulo">Modificar Listado</h2>
                <table className="tabla">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>D.N.I</th>
                    <th>Presente</th>
                    <th>Ausente</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map((alumno, index) => (
                    <tr key={index}>
                        <td>{alumno.nombre}</td>
                        <td>{alumno.apellido}</td>
                        <td>{alumno.dni}</td>
                        <td>
                            <label>
                                <input
                                    className="asistencia" 
                                    type="radio"
                                    name={`attendance-${index}`}
                                    value="Presente"
                                    checked={alumno.status === "Presente"}
                                    onChange={() => updateAttendance(index, "Presente")}
                                />
                            </label>
                        </td>
                        <td>   
                            <label>
                                <input
                                    className="asistencia" 
                                    type="radio"
                                    name={`attendance-${index}`}
                                    value="Ausente"
                                    checked={alumno.status === "Ausente"}
                                    onChange={() => updateAttendance(index, "Ausente")}
                                />
                            </label>
                        </td> 
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}
