import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Nav } from "./Nav/nav";

export default function Cistado (){
    return (
        <div>
            <Nav Infoh1="Asistencia de Alumnos"/>
            <div className="listado">
                <div className="titulo">
                    <h2>Crear Listado</h2>
                    <table className="tabla">

                    </table>
                </div>
            </div>
        </div>
    )
}