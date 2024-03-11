import React from 'react'

const Button = ({disabled, handleShow}) => {
  return (
    <button onClick={handleShow} disabled={disabled}>Confirmar</button>
  )
}

export default Button