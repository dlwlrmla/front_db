import { useEffect, useState } from 'react';
import {routes, route} from "react-router-dom"
import axios from "axios"




const LogIn = ({setLogIn,  setUserData}) => {


  const [user, setUser] = useState({
    rut:'',
    password:''
  })
  const [users, setUsers] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    //console.log('handleSubmit', user)
    verifyLogIn()
    setUser({rut:'', pasword:''})
  }

  const verifyLogIn = () => {
    users.map(el => {
        //console.log('el', el)
      if(el.rut === user.rut && el.password === user.password){
        setUserData({
            nombre:el.nombre,
            apellido:el.apellido,
            rut:el.apellido,
            id_cliente:el.id_cliente
        })
        setLogIn(false)
      }
    })
  }
  const getAllUsers =async () => {
    axios.get(`http://localhost:3000/clientes`)
    .then(response => {
      //console.log(response.data)
      setUsers(response.data)
    }).catch(err => {
      console.log(err)
    })
  }


  useEffect(() => {
    getAllUsers()
  },[])


  return (

    <div className="container">
        <h1>Banco Bkn</h1>
        <form onSubmit={handleSubmit}>
          
          <input type="text" name ="rut" placeholder ="username" value ={user.rut} onChange={e => {setUser({...user, rut:e.target.value})}} />
          <input type="password" name="password" placeholder="password" value={user.password} onChange={e => setUser({...user, password:e.target.value})}  />
          <button className="btn btn-primary">ingresar </button>
        </form>
    </div>
  )
}

export default LogIn