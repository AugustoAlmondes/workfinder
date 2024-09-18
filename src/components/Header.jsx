import '../styles/header.css'
import '../styles/index.css'

import {useState} from 'react';

import Logo from '../assets/Logomarca.png'
import FundoHeader from '../assets/fundo-header2.png'

function Header() {

    // typeUser = Tipo de usuário - setTypeUser = função para alterar o tipo  de usuário
    const [typeUser, setTypeUser] = useState(0); //0 para empresa e 1 para usuário
    const [fezLogin, setFezLogin] = useState(true); //True para logado e falso para deslogado

    return (
        <header>
            <div className="cab-part-1 animate__animated animate__fadeIn animate__delay-1s">
                <img className="animate__animated animate__fadeIn animate__delay-1s" src={Logo} alt="Logo" />

                <ul className="animate__delay-2s">
                    <li className="l1 font-1 animate__animated animate__fadeIn animate__delay-1s">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="l2 font-1 animate__animated animate__fadeIn animate__delay-1s" >
                        Sobre
                    </li>
                    <li className="l3 font-1 animate__animated animate__fadeIn animate__delay-1s">
                        <a href="allvagas.html">Vagas</a>
                    </li>

                    {typeUser === 0 && fezLogin &&
                        (
                            <li id="cadVaga" className="l4 font-1 animate__animated animate__fadeIn animate__delay-1s">
                                <a id="cadVagaLink" href="cadEmpresa.html" target="_blank">Nova Vaga</a>
                            </li>
                        )
                    }

                    {!fezLogin ? (
                        <li className="l5 font-1 animate__animated animate__fadeIn animate__delay-1s">
                            <a id="login" href="login.html" target="_blank">
                                <button className="l5 font-1">Login</button>
                            </a>
                        </li>
                    ) :
                        (
                            <div id="user" className="dropdown">
                                <i className="bi bi-person-circle dropbtn l5 font-1 animate__animated animate__fadeIn animate__delay-1s"></i>
                                <div id="myDropdown" className="dropdown-content">
                                    <a href="#">Perfil <i className="bi bi-person"></i></a>
                                    <a href="#">Configurações <i className="bi bi-gear-fill"></i></a>
                                    <a href="#">Sair <i className="bi bi-door-closed"></i></a>
                                </div>
                            </div>
                        )
                    }


                </ul>
            </div>
            <div className="cab-part-2">
                <div className="imagem-fundo animate__animated animate__fadeInDown animate__slower">
                    <img src={FundoHeader} alt="Fundo-header" />
                    <button className="saiba-mais font-1 animate__animated animate__fadeInDown animate__delay-2s">
                        Saiba Mais
                    </button>
                    <div className="texto-img l5 font-1 animate__animated animate__fadeIn animate__delay-2s">
                        <span>Conectando talento</span><br />
                        às oportunidades <br />
                        que impulsionam o <span>futuro.</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
