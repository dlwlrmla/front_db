import { useEffect, useState } from 'react';
import {routes, route, Link} from "react-router-dom"
import axios from "axios"
import LogIn from './components/LogIn';
import Main from './components/Main';

function App() {

  const [logIn, setLogIn] = useState(true)

  const [userData, setUserData] = useState({
        nombre:'',
        apellido:'',
        rut:'',
        id_cliente:'',
    })



  return (
    <div className="container">
      {logIn ?  (<LogIn setLogIn={setLogIn}  setUserData={setUserData} />):(<Main userData={userData} />)}
    </div>
  );
}

export default App;
