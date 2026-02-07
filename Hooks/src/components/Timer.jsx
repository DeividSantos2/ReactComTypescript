import React, { use } from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {

    const [timer, setTimer] = useState(0)

    //setInterval, setTimeout
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        //limpeza de estado
        return () => {
            clearInterval(intervalId)
        }
    }, []) 

  return (
    <div>Timer {timer} seconds.</div>
  )
}

export default Timer