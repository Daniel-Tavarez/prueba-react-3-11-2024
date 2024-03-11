import React from 'react'

const Alert = ({setShow}) => {
  return (
    <div className='alert'>
        <p>Este es un mensaje de una alerta</p>
        <button onClick={() => setShow(false)}>X</button>
    </div>
  )
}

export default Alert