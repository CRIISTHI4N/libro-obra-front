"use client";

import { generarId } from "@/helpers";

import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {


    //Actividades final
    const [actividades, setActividades] = useState([]);
    // Datos Actividades
    const [formulariosActividades, setFormulariosActividades] = useState([]);

    const crearFormActividad = (actividad) => {
        setActividades([...actividades, actividad])
        setFormulariosActividades([...formulariosActividades, generarId()])

        console.log(actividades);
        console.log(formulariosActividades);

    }

    return (
        <UsuarioContext.Provider
            value={{
                formulariosActividades,
                crearFormActividad
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}