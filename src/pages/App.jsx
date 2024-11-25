import Home from './Home';
import Login from './Login';
import JobForms from './JobForms';
// import TESTE from './Teste';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

    // console.log(users);
    const [fezLogin, setFezLogin] = useState(false); //True para logado e falso para deslogado
    const [typeUser, setTypeUser] = useState(1); //0 para empresa, 1 para usuário, 2 para adm



    return (

        <>
            {console.log(fezLogin, typeUser)}
            {/* <Home /> */}
            {/* <Login/> */}
            <Router>
                <Routes>
                    <Route path="/" element={<Home fezLogin={fezLogin} typeUser={typeUser} setFezLogin={setFezLogin} setTypeUser={setTypeUser} />} />
                    <Route path="/login" element={<Login setFezLogin={setFezLogin} setTypeUser={setTypeUser} />} />
                    <Route path="/vacany" element={<JobForms />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;