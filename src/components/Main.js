import {useEffect, useState } from 'react'
import axios from "axios"
import {Routes, Route} from 'react-router-dom'
import Cuentas from "./Cuentas.js"
import Depositar from './Depositar.js'
import Depositacion from './Depositacion.js'

const Main = ({userData}) => {

    const [cuentasBancarias, setCuentasBancarias] = useState([])
    const [cuenta, setCuenta] = useState({
        id_cuenta:'',
        tipo:''
    })
    const [selectedCuenta, setSelectedCuenta] = useState()

    const getCuentas =async() => {
        axios.get(`http://localhost:3000/cuenta/${userData.id_cliente}`)
        .then(res => {
            console.log("setCuentasBancarias ", res.data.recordset)
            setCuentasBancarias(res.data.recordset)
        })
    }

    useEffect(()=> {
        getCuentas()
    },[])

  return (
    <div className="container">
        <h1>Bienvenido {userData.nombre+ userData.apellido}</h1>
        <div>
            <Routes>
                <Route path="/" element={<Cuentas cuentasBancarias={cuentasBancarias}setCuenta={setCuenta} cuenta={cuenta}/>}/>
                <Route path="/depositar" element={<Depositar userData={userData} setSelectedCuenta={setSelectedCuenta} />} />
                <Route path="/depositacion" element={<Depositacion userData={userData}selectedCuenta={selectedCuenta} cuenta={cuenta}/>} />
            </Routes>
            
        </div>


    </div>

  )
}

export default Main