import React, { useState } from 'react';
import { Navigate } from 'react-router'

import Button from '@material-ui/core/Button'

import Navtop from '../../components/navtop/navtop'
import Navleft from '../../components/navleft/navleft'

function Home(props) {

    function handleLogout() {

        console.log("Logout pfv")

        localStorage.setItem("autoriza", false)

        setGoNext(true)
    }

    const [goNext, setGoNext] = useState(false)

    return (
        <div id="home">

            <Navtop />
            <Navleft />

            <Button
                className="Button"
                variant="contained"
                color="secondary"
                type="button"
                onClick={handleLogout}
                >
                Sair
            </Button>

            { goNext ?
                (
                    <Navigate to={"/"} />
                )
                :
                (
                    <div></div>
                )
            }
            

        </div>
    )
}






/*

class Home extends Component {

    // Boolean(localStorage.getItem("autoriza") || "false")

    constructor(props) {
        super(props)

        this.state = {
            goToLandingPage: false
        }
    }

    handleLogout = () => {

        console.log("Logout pfv")

        this.setState({
            goToLandingPage: true
        })
    }

    render() {
        return (
            <div id="home">

                <Navtop />

                <Button
                    className="Button"
                    variant="contained"
                    color="secondary"
                    type="button"
                    onClick={this.handleLogout}
                    >
                    Sair
                </Button>


                {
                    this.state.goToLandingPage ?
                    (
                        <Navigate to={"/"} />
                    )
                    :
                    (
                        <div>ta em casa</div>
                    )
                }
                

            </div>
        )
    }
}
*/
export default Home;