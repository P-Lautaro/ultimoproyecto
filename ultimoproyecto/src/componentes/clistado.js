import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Nav } from "./Nav/nav";
import './Crear Listado/CrearLstado.css'
export default function Cistado (){
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
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}