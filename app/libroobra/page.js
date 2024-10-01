"use client"

import { MainLayout } from "@/components/MainLayout"
import { AgregarActividad } from "@/components/AgregarActividad"
import useUsuario from "@/hooks/useUsuario"
import { useEffect } from "react";

export default function LibroObra() {

    const {
        formulariosActividades,
        crearFormActividad
    } = useUsuario();

    useEffect(() => {
        crearFormActividad({
            id: "id desde page",
            producto: "producto desde page"
        })
    }, [])


    return (
        <MainLayout>
            <h1 className="text-center text-xl mb-7">Formulario Libro Obra</h1>

            <h2 className="text-xl my-5">Horario:</h2>


            <div
                className="flex gap-5 mb-5"
            >
                <label
                    htmlFor="hora_inicio_personal"
                >
                    Hora de Entrada:
                </label>

                <input
                    id="hora_inicio_personal"
                    type="time"
                    defaultValue={'07:00'}
                />
            </div>

            <div
                className="flex gap-5 mb-5"
            >
                <label
                    htmlFor="hora_salida_personal"
                >
                    Hora de Salida:
                </label>

                <input
                    id="hora_salida_personal"
                    type="time"
                />
            </div>

            <div
                className="flex gap-5 mb-5"
            >
                <label
                    htmlFor="clima"
                >
                    Clima:
                </label>

                <select id="clima">
                    <option value="soleado">Soleado</option>
                    <option value="nublado">Nublado</option>
                    <option value="lluvioso">Lluvioso</option>
                </select>
            </div>

            <h2 className="text-xl my-5">Actividades:</h2>

            {

                formulariosActividades.map(id => (
                    <AgregarActividad
                        key={id}
                        id={id}
                    />
                ))
            }


            <h2 className="text-xl my-5">Equipo:</h2>

            <div
                className="flex gap-5 mb-5"
            >
                <label
                    htmlFor="equipos_almacenados"
                >
                    Nombre:
                </label>

                <select id="equipos_almacenados">
                    <option value="t">Taladro</option>
                    <option value="me">Maquina Excavadora</option>
                    <option value="m">Multimetro</option>
                </select>

            </div>

            <div
                className="flex gap-5 mb-5"
            >
                <label
                    htmlFor="cantidad_equipo"
                >
                    Cantidad:
                </label>

                <input
                    id="cantidad_equipo"
                    type="text"
                />
            </div>

            <div
                className="flex gap-5 mb-5"
            >
                <label
                    htmlFor="hora_salida_equipo"
                >
                    Hora de Salida:
                </label>

                <input
                    id="hora_salida_equipo"
                    type="time"
                />
            </div>

            <div
                className="flex gap-5 mb-5"
            >
                <label
                    htmlFor="hora_entrega_equipo"
                >
                    Hora de Entrega:
                </label>

                <input
                    id="hora_entrega_equipo"
                    type="time"
                />
            </div>

            <h3 className="text-lg my-5">Mano de Obra:</h3>

            <div
                className="flex gap-5 mb-5"
            >
                <label
                    htmlFor="descripcion_mano_obra"
                >
                    Descripcion:
                </label>

                <input
                    id="descripcion_mano_obra"
                    type="text"
                />
            </div>

            <div
                className="flex gap-5 mb-5"
            >
                <label
                    htmlFor="cantidad_mano_obra"
                >
                    Cantidad:
                </label>

                <input
                    id="cantidad_mano_obra"
                    type="text"
                />
            </div>

            <h2 className="text-xl my-5">Anexos de Dificultades:</h2>

            <div>
                <p>1. Descripción actividad uno</p>
                <p>2. Descripción actividad dos</p>

                <p>{'[Foto de actividad]'}</p>
                <p>{'[Foto de actividad]'}</p>

                <div className="flex gap-5 items-center">
                    <div className="flex gap-3">
                        <label
                            htmlFor="problema_actividad"
                        >
                            Descripcion:
                        </label>

                        <input
                            id="problema_actividad"
                            type="text"
                        />
                    </div>

                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>
                    </span>

                    <div className="flex gap-3">
                        <button
                            type="button"
                            className="bg-red-400 hover:bg-red-600 p-2 rounded-full"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            className={`bg-orange-400 hover:bg-orange-600 p-2 rounded-full`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            className={`bg-green-400 hover:bg-green-600 p-2 rounded-full`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            className={`bg-orange-400 hover:bg-orange-600 p-2  rounded-full`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}
