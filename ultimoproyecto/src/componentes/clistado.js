import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Nav } from "./Nav/nav";
import { Footer } from "./Footer/footer";
import { CrearListado } from "./Crear Listado/crearListado";

export default function Cistado (){
    return (
        <div>
            <Nav Infoh1="Asistencia de Alumnos"/>
            <Footer/>
            <CrearListado/>
        </div>
    )
}