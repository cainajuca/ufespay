import React, { useState } from 'react';

import './styles.css'

import { Button, TextField, InputAdornment } from '@material-ui/core'

import { blue, red } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: 10,
        marginBottom: 10,
    },
    media: {
        WebkitMaxInlineSize: 10,
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: blue[500],
        height: 150,
        width: 150,
        fontSize: 80,
        fontWeight: 'bold'
    },
}));



export default function Profile(props) {
    
    const classes = useStyles();
    
    const [edit, setEdit] = useState(false)

    const [user, setUser] = useState({
        name: 'Cainã Jucá',
        email: 'cainajuca@gmail.com',
        balance: 200300,
        password: '123',
    })

    // profile variables
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)

    const [password, setPassword] = useState()
    const [repPassword, setRepPassword] = useState()
    const [currentPassword, setCurrentPassword] = useState()

    const [changePassword, setChangePassword] = useState(false)

    function erasePasswords() {
        setPassword('')
        setRepPassword('')
        setCurrentPassword('')
    }

    function savePasswordChanges(e) {
        if(currentPassword === user.password) {

            if(password === repPassword) {
                
                setUser({...user,
                    password: password
                })
                
                setChangePassword(!changePassword)
            } else {
                alert("Senha repetida incorretamente.")
            }
            
        } else {
            alert("Senha atual incorreta.")
        }
        
        erasePasswords()

        e.preventDefault()
    }

    function saveProfileChanges(e) {

        setUser({...user,
            name: name,
            email: email
        })

        setEdit(!edit)

        e.preventDefault()
    }

    return (
    
        <div className="profile">
            {
                !edit ?
                (
                    
                    <div className="show-profile">
                        <h1>Seu Perfil</h1>

                        <Avatar aria-label="recipe" className={classes.avatar} id="avatar">
                            {user.name[0]}
                        </Avatar>

                        <br />

                        <div className="names">
                            <h3>{user.name}</h3>

                            <h3>{user.email}</h3>

                            <h1>{user.balance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>
                            
                        </div>

                        <Button 
                            className="Button"
                            variant="contained"
                            color="primary"
                            type="button"
                            onClick={() => {setEdit(!edit)}}
                            
                            >Editar Perfil
                        </Button>

                        { !changePassword ?
                            (
                                <Button 
                                    className="Button"
                                    variant="contained"
                                    color="default"
                                    type="button"
                                    onClick={() => {setChangePassword(!changePassword)}}
                                    
                                    >Mudar Senha
                                </Button>
                            )
                            :
                            (
                                <form onSubmit = {savePasswordChanges}>

                                    <div className="TextField">
                                        <TextField
                                            className="TextField"
                                            variant="filled"
                                            color="secondary"
                                            label="Senha"
                                            placeholder="Senha Atual"
                                            type="password"
                                            required
                                            value={currentPassword}
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LockIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </div>


                                    <div className="TextField">
                                        <TextField
                                            className="TextField"
                                            variant="filled"
                                            color="secondary"
                                            label="Senha"
                                            placeholder="Nova Senha"
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LockIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </div>

                                    <div className="TextField">
                                        <TextField
                                            className="TextField"
                                            variant="filled"
                                            color="secondary"
                                            label="Confirme a senha"
                                            placeholder="Confirme Nova a Senha"
                                            type="password"
                                            required
                                            value={repPassword}
                                            onChange={(e) => setRepPassword(e.target.value)}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LockIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </div>


                                    <div className="botao">
                                        <Button 
                                            className="Button"
                                            variant="contained"
                                            color="terciary"
                                            type="submit"
                                            
                                            >Salvar Senha
                                        </Button>
                                    </div>

                                    <div className="botao">
                                        <Button 
                                            className="Button"
                                            variant="contained"
                                            color="secondary"
                                            type="button"
                                            onClick={() => {
                                                erasePasswords()
                                                setChangePassword(!changePassword)
                                            }}
                                            
                                            >Cancelar
                                        </Button>
                                    </div>

                                </form>

                            )
                        }

                        

                    </div>
                        
                )                    
                :
                (
                    <div className="edit-profile">
                        <h1>Editar Perfil</h1>

                        <form onSubmit = {saveProfileChanges}>

                            <div className="TextField">
                                <TextField
                                    className="TextField"
                                    variant="filled"
                                    color="secondary"
                                    label="Nome"
                                    placeholder="Nome completo"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircleIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </div>

                            <div className="TextField">
                                <TextField
                                    className="TextField"
                                    variant="filled"
                                    color="secondary"
                                    label="Email"
                                    placeholder="exemplo@exemplo.com"
                                    type="text"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        )
                                    }} 
                                />
                            </div>

                            <div className="botao">
                                <Button 
                                    className="Button"
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    
                                    >Salvar
                                </Button>
                            </div>

                            <div className="botao">
                                <Button 
                                    className="Button"
                                    variant="contained"
                                    color="secondary"
                                    type="button"
                                    onClick={() => {setEdit(!edit)}}
                                    
                                    >Cancelar
                                </Button>
                            </div>

                        </form>
                    </div>
                )
            }
        </div>
    )
}


/*
export default class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            edit: false
        }
    }

    

    handleClick = () => {

        this.setState({
            edit: !this.state.edit
        })

        if(this.state.edit) {
            console.log("Dados atualizados no DB.")
            // update de dados do perfil

            
        }
    }

    render() {

        const useStyles = makeStyles((theme) => ({
            root: {
              maxWidth: 345,
              marginTop: 10,
              marginBottom: 10,
              
            },
            media: {
              WebkitMaxInlineSize: 10,
              height: 0,
              paddingTop: '56.25%', // 16:9
            },
            avatar: {
              backgroundColor: red[500],
            },
          }));

          const classes = useStyles();

        return(
            <div>
                {
                    this.state.edit ?
                    (
                        <div>
                            <h1>- Editar Perfil -</h1>

                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image={this.props.url}
                                    title="user photo"
                                />
                            </Card>

                            <Button 
                                className="Button"
                                variant="contained"
                                color="primary"
                                type="button"
                                onClick={this.handleClick}
                                
                                >Salvar Alterações
                            </Button>
                        </div>
                    )                    
                    :
                    (
                        <div>
                            <h1>- Perfil -</h1>

                            <Button 
                                className="Button"
                                variant="contained"
                                color="primary"
                                type="button"
                                onClick={this.handleClick}
                                
                                >Editar Perfil
                            </Button>
                        </div>
                    )
                }
            </div>
        )
    }

}
*/