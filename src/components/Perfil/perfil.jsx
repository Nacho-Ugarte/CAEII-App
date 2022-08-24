// react
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {useNavigate} from 'react-router-dom';
// cookies
import Cookies from 'universal-cookie';
// components
import BaseLayout from "../layout"
import Credencial from "./SectionCredencial/Credencial";
import Cronograma from "./SectionCronograma/Cronograma";
import SectionMapas from "./SectionMapas/Section_Mapas";
import Admins from "./SectionAdmins/admins";
import Badges from "./SectionBadges/badges"
import Preguntas from "./SectionPreguntas/preguntas"
// functions
import {Que_dia_es_hoy} from "./Suport_functions"
// styles
import "../../styles/perfil/css/Perfil.css";
// imgs
import CaeiiLogo from "../../styles/perfil/img/CAEII LOGO 1.png";
// json

const cookies = new Cookies();


export default function Perfil() {
    const [Salas, SetSalas] = useState({salida: "Explanada", llegada:"Explanada"});
    const [User, SetUser] = useState({
        user_id: "0000",
        name: '',
        admin: false
    });
    // const [actividades_segun_user, Set_actividades_segun_user] = useState([]);

    // var actividades_segun_user = []

    const [Asistencia, SetAsistencia] = useState(0);
    const [Actividad, SetActividad] = useState();

    const navigate = useNavigate();


    useEffect(() => {
        if (cookies.get('session') !== undefined) {
            // console.log(cookies.get('session').token.substring(cookies.get('session').token.indexOf("|") + 1));
            SetUser(cookies.get('session').user)
        } else {
            // return navigate("/")
        }

        // PorcentajeAsistencia()

        SetAsistencia(cookies.get('asistencia'))
    }, [])

    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth'})

    return (
        <div className="App" id="perfil">
            <div className="sistema_solar_container">
                <div className="sistema_solar">
                    <div className="sol"></div>
                    <div className="orbits orbit_1">
                        <div className="planet_container">
                            <div className="planet"></div>
                        </div>
                    </div>
                    <div className="orbits orbit_2">
                        <div className="planet_container">
                            <div className="planet"></div>
                        </div>
                    </div>
                    <div className="orbits orbit_3">
                        <div className="planet_container">
                            <div className="planet"></div>
                        </div>
                    </div>
                </div>
            </div>
            <BaseLayout>
                <main>

                    {User.admin === true ? <Admins/> : Que_dia_es_hoy() === "Jueves" ? <Badges/> : null}

                    {User.user_id === 3638 ? <Badges/> : ""}
                    
                    <Credencial nombre={User.name} asistencia={Asistencia} id={User.user_id}/>

                    <Preguntas/>

                    <Cronograma SetSalas={SetSalas} Salas={Salas} SetActividad={SetActividad} executeScroll={executeScroll}/>

                    <SectionMapas salas={Salas} referencia={myRef}/>

                    {Que_dia_es_hoy() !== "Jueves" ? <Badges/> : null}

                    <section id="logo">
                        <img src={CaeiiLogo} alt="logo CAEII" />
                    </section>
                </main>
            </BaseLayout>
        </div>
    );
}