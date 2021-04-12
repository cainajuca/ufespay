import React, { useState } from 'react';

import './transfer-encia.css'

export default function Transferencia(props) {

    const [name, setName] = useState()
    const [value, setValue] = useState()
    const [message, setMessage] = useState()

    function handleSubmit() {

    }

    function handleTextFieldChange() {
        
    }

    return (
        <div className="transfer-encia">

            <h1>Transfira aqui</h1>

            <h2>Nova Transação</h2>


            {/* 
                expor lista d json
                tem no occurrence
            */}

        </div>
    )
}