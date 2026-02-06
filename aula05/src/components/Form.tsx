import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [value, setValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();

        console.log("Form enviado com o valor:", value);

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input  
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                type="text" placeholder='Preencha o campo.'
            />
            <br/>
            <label>{value}</label>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Form