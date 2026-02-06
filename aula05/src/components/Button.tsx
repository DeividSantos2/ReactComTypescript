import React from 'react'

const Button = () => {

    const click = () => {
        console.log('Button clicked')
    }

  return (
    <div>
        <button onClick={click}>Click here !</button>
    </div>
  )
}

export default Button