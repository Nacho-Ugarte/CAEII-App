import { useState } from "react"

import {Que_dia_es_hoy} from "../Suport_functions"


export default function Cronograma({dias}) {
    const [Dia, SetDia] = useState(Que_dia_es_hoy())

    let today_activities
    let today_pilar

    dias.map((dia) => {
        if ( dia.dia === Dia) {
            today_activities = dia.actividades;
            today_pilar = dia.pilar
        }
    })

    return (
        <section id="cronograma">
            <div className="title_card_perfil title_cronograma">
                <h2> cronograma </h2>

                <label htmlFor="dia" className="title_text">Día: </label>
                <div className="select" id="dia">
                    <select onChange={(value) => SetDia(value.target.value)}  defaultValue={Que_dia_es_hoy()}>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                        <option value="Sabado">Sabado</option>
                        <option value="Domingo">Domingo</option>
                    </select>
                </div>
                <p className="title_text"> Pilar: </p>
                <p className="title_text" id="pilar"> {today_pilar} </p>
            </div>
            <table className="content_cronograma">
                <tbody>
                    <tr className="cronograma_table_title" id="L1">
                        <th>HORARIO</th>
                        <th>ACTIVIDAD</th>
                        <th>LUGAR</th>
                    </tr>

                    <Lineas today_activities={today_activities}/>

                    
                </tbody>
            </table>
        </section>
    )
}


function Lineas({today_activities}){
    var className
    return today_activities.map((actividad, index) => {
        if (actividad.titulo === "ALMUERZO" || actividad.titulo === "TIEMPO LIBRE") {
            className = "conLinea resaltado"
        } else {
            className = ""
        }
        return(
            <tr id="L2" className={className} key={index}>
                <td className="hora"> {actividad.horario} </td>
                <td className="actividad"> {actividad.titulo} </td>

                { actividad.lugar ? <Donde actividad={actividad}/> : null}
            </tr>
        )
    })
}

function Donde({actividad}){
    return(
        <td className="lugar linea">
            <a href=""> {actividad.lugar} </a>
            <div className="line_container" /><div className="line"></div>
        </td>
    )
}



