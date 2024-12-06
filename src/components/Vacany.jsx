// import { BiGeoAlt, BiBuilding, BiDollar } from 'react-icons/bi';
// import { BiGeoAlt } from 'react-icons/bi';
import '../styles/Vacany.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Vacany({ listDataVvacany }) {
    console.log("Aqui é a lista: ", listDataVvacany);

    return (
        <>
            <div className='card allvacany'>

                <div className="foto-card default_pointer_cs">
                    <h3 className="default_pointer_cs">{listDataVvacany.enterprise}</h3>
                </div>

                <h4 className="default_pointer_cs">{listDataVvacany.title}</h4>

                <ul className="requisitos default_pointer_cs">
                    <li className="default_pointer_cs">{listDataVvacany.contractType}</li>
                    <li className="default_pointer_cs">{listDataVvacany.modality}</li>
                    <li className="default_pointer_cs">{listDataVvacany.areaActivity}</li>
                </ul>
                <ul className="info-vaga">
                    <li>
                        <span>Local:</span> {listDataVvacany.local}
                    </li>
                    <li>
                        <span>Quantidade de Vagas:</span> {listDataVvacany.amount}
                    </li>
                    <li>
                        <span>Salário:</span> {listDataVvacany.salary}
                    </li>
                    <Link
                        to={{
                            pathname: "/infojob",
                        }}
                        state={{ jobData: listDataVvacany }}
                        className="acessar-card"
                    >
                        <h4>Acessar</h4>
                    </Link>
                </ul>
            </div>
        </>
    );
}

Vacany.propTypes = {
    listDataVvacany: PropTypes.arrayOf(PropTypes.string)
}