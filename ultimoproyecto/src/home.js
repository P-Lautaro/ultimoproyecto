import React, { Component, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client'
import './home.css';
import { Nav } from "./componentes/Nav/nav";

export default function Home () {
    return (
        <div>
            <Nav Infoh1="Asistencia de Alumnos"/>
        </div>
    )
}