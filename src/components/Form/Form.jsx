import React, { useState } from 'react';
import Alert from '../Alert/Alert';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Form = () => {
  const [value, setValue] = useState('');
  const [showAlert, setShow] = useState();

    const handleShow = () => {
        setShow(!showAlert);
    }

  return (
    <div className='form'>
        <h2>Prueba React</h2>
        <Input setShow={setShow} setValueFC={setValue}/>
        {showAlert && (
            <Alert setShow={setShow}/>
        )}
        <Button handleShow={handleShow} disabled={!value}/>
    </div>
  )
}

export default Form