// import { BiGeoAlt, BiBuilding, BiDollar } from 'react-icons/bi';
// import { BiGeoAlt } from 'react-icons/bi';
import '../styles/Vacany.css';

export default function Vacany() {
    return (
        <>
            <div className='card allvacany'>
                <ul className="info-vaga">
                    <li>
                        {/* <BiGeoAlt size={16} /> */}
                        Picos-PI
                    </li>
                    <li>
                        {/* <BiBuilding size={16} /> */}
                        2 Vagas
                    </li>
                    <li>
                        {/* <BiDollar size={16} /> */}
                        Não Informado
                    </li>

                    <h4 className="acessar-card">Acessar</h4>
                </ul>
            </div>
        </>
    );
}