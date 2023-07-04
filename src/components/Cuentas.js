import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cuentas = ({cuentasBancarias, setCuenta, cuenta}) => {
    const navigate = useNavigate()

    const handleClick = (el) => {
        setCuenta({...cuenta, id_cuenta:el.id_cuenta, tipo:el.tipo})
        navigate('/depositar')
    }

  return (
    <div>{
        cuentasBancarias && cuentasBancarias.map(el => (
                    <button className="btn" onClick={() => handleClick(el)}>
                        <div class="card">
                            <div class="card-header">
                                {el.tipo}
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                <p>{el.saldo}</p>
                                <footer class="blockquote-footer">id_cuenta {el.id_cuenta}</footer>
                                </blockquote>
                            </div>
                            </div>
                    </button>
                ))
    }</div>
  )
}

export default Cuentas