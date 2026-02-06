import React from 'react'

interface NumberListProps {
  numbers: number[];
}

const NumberList = ({numbers}: NumberListProps) => {
  return (
    <div>
        {numbers.map((number) => (
            <p key={number}>{number}</p>
        ))}
    </div>
  )
}

export default NumberList