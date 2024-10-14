import Header from '../components/Header'; // Importação corrigida
import HeaderPart2 from '../components/HeaderPart2';
import VagaCard from '../components/VagaCard';
import '../styles/App.css';

import { useState } from 'react';


function App() {

    const [typeUser, setTypeUser] = useState(2); //0 para empresa, 1 para usuário, 2 para adm
    const [fezLogin, setFezLogin] = useState(true); //True para logado e falso para deslogado

    return (
        < >
            <Header typeUser={typeUser} fezLogin={fezLogin} />
            <HeaderPart2 />

            <main>
                <section className='part-1'>

                    {typeUser !== 0 &&
                        (
                            <>
                    <div className="titulo-vaga">
                        <h1>Vagas em <span>Destaque</span></h1>
                        <p className="descricao-vaga">
                            Encontre a oportunidade perfeita que se alinha com seus interesses e
                            habilidades. De empregos em tecnologia à oportunidades na área de saúde.
                        </p>
                    </div>

                                <div className="vagas-grid">
                                    <VagaCard />
                                    <VagaCard />
                                    <VagaCard />
                                    <VagaCard />
                                    <VagaCard />
                                    <VagaCard />
                                </div>

                                <div className="vermais-card">
                                    <a href="allvagas.html">
                                        <button>
                                            Ver mais vagas
                                        </button>
                                    </a>
                                </div>
                            </>
                        )
                    }
                </section>
            </main>
        </>
    );
}

export default App;