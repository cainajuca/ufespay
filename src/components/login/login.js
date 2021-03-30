import React, { Component } from 'react';

import './login.css'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {

            name: '',
            email: '',
            password: '',

            // retorno de validação do backend (caso a validação ocorra lá)
            success: '',
            id: '',
            errorMessages: []
        }
    }

    handleSubmit = event => {

        const PORT = "3333"
        const URL = "http://localhost:"

        this.setState({
            success: 'deu bom'
        })

        event.preventDefault(); // evitar que abra uma nova pagina
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div id="login">

                <h1>Bem vindo de volta</h1>

                <Button variant="contained" color="secondary" type="submit">
                    Faça seu login
                </Button>

                <form onSubmit = {this.handleSubmit}>

                    <TextField 
                        variant="outlined"
                        color="secondary"
                        label="Nome"
                        placeholder="Nome completo"
                        required
                    />

                    <input
                        placeholder="Nome"
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />

                    <input
                        placeholder="Email"
                        type="text"
                        id="email"
                        name="email"
                        required
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />

                    <input
                        placeholder="Senha"
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />

                    <Button variant="contained" color="secondary" type="submit">
                        Entrar
                    </Button>

                </form>

                <h1>{this.state.name}</h1>

            </div>
        )
    }
}

export default Login;