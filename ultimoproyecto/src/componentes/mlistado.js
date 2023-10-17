import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Nav } from "./Nav/nav";

export default function MListado (){
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
                            <th>Presente</th>
                            <th>Ausente</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}