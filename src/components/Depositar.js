import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Depositar = ({userData, setSelectedCuenta}) => {
    const navigate = useNavigate()

    const [cuentas, setCuentas] = useState([])

const getData = async ()=> {
    axios.get(`http://localhost:3000/cuentasDeposito/${userData.id_cliente}`)
    .then(res => {
        setCuentas(res.data.recordset)
    })
}

const handleClick = (el) => {
    setSelectedCuenta(el)
    navigate('/depositacion')
}

useEffect(() => {
    getData()
},[])

  return (
    <div className="container">
        {
            cuentas && cuentas.map(el => (
                <div className="card" styles="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title">{el.id_cuenta}</h5>
                        <p className="card-text">Estas son cuentas de referencia, en la version final de la app se mostrara informacion adicional</p>
                        <button className="btn btn-danger" onClick={() => handleClick(el)}>Depositar</button>
                    </div>
                    </div>
            ))
        }
    </div>
  )
}

export default Depositar