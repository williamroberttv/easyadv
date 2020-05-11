import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <div className="login">
      <div className="logo-container">
        <h1>EasyADV</h1>
        <p>
          Seu escritório online. Agenda, cálculos, formulários e consulta em um
          só lugar.
        </p>
        <img src={logo} alt="logo" />
      </div>
      <div className="login-container">
        <form>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Senha" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
