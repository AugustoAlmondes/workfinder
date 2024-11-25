import Footer from "../components/Footer";
import Header from "../components/Header";
import Vacany from "../components/Vacany";
import '../styles/Vacany.css'

import PropTypes from "prop-types";

export default function AllVacany({ typeUser, fezLogin, handleLogout }) {
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
                    <Vacany />
                    <Vacany />
                    <Vacany />
                    <Vacany />
                    <Vacany />
                    <Vacany />
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