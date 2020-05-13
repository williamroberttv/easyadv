import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png";
import Footer from "../../components/footer";
import Socials from "../../components/socials";

import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("session", { email, senha });

      localStorage.setItem("user_name", response.data.nome);
      history.push("/perfil");
    } catch (err) {
      alert("Erro no login, tente novamente.");
    }
  }
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
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button type="submit">Login</button>
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
