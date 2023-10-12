import React, { Component, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client'
import './home.css';
import { Nav } from "./componentes/Nav/nav";
import { Footer } from "./componentes/Footer/footer";
import { CrearListado } from "./componentes/Crear Listado/crearListado";
import { ModificarListado } from "./componentes/Modificar Listado/ModificarListado";
export default function Home () {
    return (
        <div>
            <Nav Infoh1="Asistencia de Alumnos"/>
            <Footer/>
            <CrearListado/>
        </div>
    )
}