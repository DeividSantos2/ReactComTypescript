import React from 'react'
import{ useState } from 'react'

const UserInforForm = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //acessar API

        console.log("Nome:", nome);
        console.log("Email:", email);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input 
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <label>E-mail</label>
            <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Enviar</button>
        </form>
    
        <div>O nome digitado foi: {nome}</div>
        <div>O email digitado foi: {email}</div>
    </div>
  )
}

export default UserInforForm