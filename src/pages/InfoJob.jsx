import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropTypes from "prop-types";

export default function InfoJob({ typeUser, fezLogin, handleLogout }) {
    const location = useLocation();
    const { jobData } = location.state || {};

    if (!jobData) {
        return <p>Informações da vaga não encontradas.</p>;
    }

    return (
        <>
            <Header typeUser={typeUser} fezLogin={fezLogin} handleLogout={handleLogout} />
            <main className="jobforms">
                <div className="titulo-pagina-vaga infojob">
                    <h1>Informações da <span>Vaga</span></h1>
                </div>

                <div className="display-job-info">
                    <div className="job-info">
                        <p><strong>Empresa:</strong> {jobData.enterprise}</p>
                        <p><strong>Título:</strong> {jobData.title}</p>
                        <p><strong>Habilidades:</strong> {jobData.ability}</p>
                        <p><strong>Local:</strong> {jobData.local}</p>
                        <p><strong>Tipo de Contrato:</strong> {jobData.contractType}</p>
                        <p><strong>Modalidade:</strong> {jobData.modality}</p>
                        <p><strong>Quantidade de Vagas:</strong> {jobData.amount}</p>
                        <p><strong>Área de Atuação:</strong> {jobData.areaActivity}</p>
                        <p><strong>PCD:</strong> {jobData.pcd}</p>
                        <p><strong>CNH:</strong> {jobData.cnh}</p>
                        <p><strong>Salário:</strong> {jobData.salary}</p>
                        <p><strong>Benefícios:</strong> {jobData.benefits}</p>
                        <p><strong>Descrição:</strong> {jobData.description}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

InfoJob.propTypes = {
    jobData: PropTypes.object,
    typeUser: PropTypes.string,
    fezLogin: PropTypes.bool,
    handleLogout: PropTypes.func,
}