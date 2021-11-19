import {React, Component} from "react";
import '../css/App.css';
import logo from '../Logoinrad.png';

class Login extends Component{
    render() {
        return(
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          editar
        </p>
        </header>
        </div>
        );
    }
}

// <img src={logo} className="App-logo" alt="logo" />
export default Login;