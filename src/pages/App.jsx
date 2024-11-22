import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';

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
                    <Route path="/" element={<Home fezLogin={fezLogin} typeUser={typeUser} />} />
                    <Route path="/login" element={<Login setFezLogin={setFezLogin} setTypeUser={setTypeUser} />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;