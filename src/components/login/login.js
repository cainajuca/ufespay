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
            errorMessages: [],

            showLoginForm: false
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
    

    handleTextFieldChange = (field, event) => {
        this.setState({
            [field]: event.target.value
        })
    }

    handleLoginForm = () => {
        this.setState({
            showLoginForm: true
        })
    }


    render() {
        return (
            <div id="login">

                <h1>Bem vindo de volta</h1>

                {
                    this.state.showLoginForm ?
                    (
                        <form onSubmit = {this.handleSubmit}>

                            <div className="TextField">
                                <TextField
                                    variant="outlined"
                                    color="secondary"
                                    label="Nome"
                                    placeholder="Nome completo"
                                    type="text"
                                    required
                                    value={this.state.name}
                                    onChange={(e) => this.handleTextFieldChange("name", e)}
                                />
                            </div>

                            <div className="TextField">
                                <TextField
                                    variant="outlined"
                                    color="secondary"
                                    label="Email"
                                    placeholder="exemplo@exemplo.com"
                                    type="text"
                                    required
                                    value={this.state.email}
                                    onChange={(e) => this.handleTextFieldChange("email", e)}
                                />
                            </div>

                            <div className="TextField">
                                <TextField
                                    variant="outlined"
                                    color="secondary"
                                    label="Senha"
                                    placeholder="Senha"
                                    type="password"
                                    required
                                    value={this.state.password}
                                    onChange={(e) => this.handleTextFieldChange("password", e)}
                                />
                            </div>

                            <Button className="Button" variant="contained" color="secondary" type="submit">
                                Entrar
                            </Button>

                        </form>
                    )
                    :
                    (
                        <Button
                            className="Button"
                            variant="contained"
                            color="secondary"
                            type="button"
                            onClick={this.handleLoginForm}
                            >
                            Faça seu login
                        </Button>
                    )
                }

            </div>
        )
    }
}

export default Login;