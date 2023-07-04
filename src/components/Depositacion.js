import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'



const Depositacion = ({userData, selectedCuenta,cuenta}) => {
    const navigate = useNavigate()

    const [valor, setValor ] = useState(0)
    const data = {
        NumeroCuenta:selectedCuenta.id_cuenta,
        TipoTransaccion: 'Depósito',
        Monto: valor,
        NumeroCuentaEmisora: cuenta.id_cuenta
    }
    const enviar = async() => {
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3000/depositar`,data )
        .then(res => {
            console.log(res)
            navigate('/depositar')
        })
    }

  return (
    <div className="container">
        <h1>Depositacion</h1>
        <div className="container">
            <form onSubmit={handleSubmit}>

                <label>ingrese monto a depositar a : {selectedCuenta.id_cliente + " cuenta "+ selectedCuenta.tipo}</label>
                <input type="number" value={valor} onChange={e => setValor(e.target.value)} />
                <button className="btn btn-danger" type="submit">transferir</button>

            </form>
        </div>
    </div>
  )
}

export default Depositacion