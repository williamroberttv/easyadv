import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png";
import Footer from "../../components/footer";
import Socials from "../../components/socials";

function Login() {
  return (
    <div className="home">
      <div className="main">
        <h1>
          <span>Easy</span>ADV
        </h1>
        <h3>Seu escritório online.</h3>
        <p>
          Sua agenda, cálculos advocatícios, formulários e consultas em um só
          lugar.
        </p>
      </div>
      <div className="login-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="login">
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Login</button>
          </form>
          <p>
            <Link to="/cadastro">Não tenho cadastro</Link>
          </p>
        </div>
      </div>
      <Socials />
      <Footer />
    </div>
  );
}

export default Login;
