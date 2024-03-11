import React from 'react';

const Input = ({setValueFC, setShow}) => {
  return (
    <input onChange={(e) => {
        setValueFC(e.target.value)
        setShow(false);
    }} placeholder='Introduzca la información'></input>
  )
}

export default Input