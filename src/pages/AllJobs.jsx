import Footer from "../components/Footer";
import Header from "../components/Header";
import Vacany from "../components/Vacany";
import '../styles/Vacany.css'

import { useEffect, useState } from 'react';
import PropTypes from "prop-types";

export default function AllVacany({ typeUser, fezLogin, handleLogout }) {

    const [listDataVvacany, setListDataVacany] = useState([]);


    useEffect(() => {
        const getAllVacany = async () => {
            const response = await fetch('http://localhost:8800/empresa/vacany');
            const data = await response.json();
            setListDataVacany(data);
            // console.log(data);
            
        }
        getAllVacany();
    }, [])

    return (
        <>
        <Header typeUser={typeUser} fezLogin={fezLogin} handleLogout={handleLogout} />
            <main>
                <div className="titulo-pagina-vaga">
                    <h1>Descubra Sua Próxima <span>Aventura Profissional!!</span></h1>
                </div>
                <div className="pesquisa-vaga">
                    <h2>Pesquise por uma <span>vaga específica</span> <label htmlFor="pesquisa-vaga"><i
                        className="bi bi-search"></i></label></h2>
                    <div className="container-pesquisa">
                        <input className="input-vaga" type="text" name="pesquisa-vaga" id="pesquisa-vaga"
                            placeholder="Procurar Vaga" />

                        <button className="botao-pesquisa-vaga">Pesquisar</button>
                    </div>
                </div>

                <h4 className="subtitulo-vaga">Todas as Vagas</h4>
                <div className="grid-vagas">
                    {
                        listDataVvacany.map((item, index) => (
                            <Vacany key={index} listDataVvacany={item} />
                        ))
                    }
                </div>
            </main>

            <Footer/>
        </>
    );
}

AllVacany.prototype = {
    typeUser: PropTypes.string.isRequired,
    fezLogin: PropTypes.bool.isRequired,
    handleLogout: PropTypes.func.isRequired
}