import React, { Component } from 'react';

import Button from '@material-ui/core/Button'

class CreateAcc extends Component {

    constructor(props) {
        super(props)

        this.state = {

            name: '',
            email: '',
            password: '',
            repPassword,
            

            
            success: '',
            id: '',
            errorMessages: []
        }
    }

    handleSubmit = event => {

        const PORT = "3333"
        const URL = "http://localhost:"

        // const requestOptions = {
        //     method: "post",
        //     body: JSON.stringify({
        //         name: this.state.name,
        //         email: this.state.email,
        //         password: this.state.password
        //     }),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // }
        
        // fetch(`${URL}${PORT}/users`, requestOptions)
        // .then(response => response.json())
        // .then(data => {
        //     if(data.sucesso === true) {
        //         this.setState({
        //             success: true,
        //             id: data.id
        //         })
        //     } else {
        //         this.setState({
        //             success: false,
        //             errorMessages: data.errorMessages
        //         })
        //     }
        // })

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

                <h1>UfesPay</h1>

                <h3>Cadastre-se!</h3>

                <form onSubmit = {this.handleSubmit}>

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

                    <input
                        placeholder="Confirme a senha"
                        type="password"
                        id="rep-password"
                        name="rep-password"
                        required
                        value={this.state.repPassword}
                        onChange={this.handleInputChange}
                    />

                    <Button variant="contained" color="secondary" type="submit">
                        Cadastrar
                    </Button>

                </form>

                <h1>{this.state.success}</h1>

            </div>
        )
    }
}

export default CreateAcc;