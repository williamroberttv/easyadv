import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import "./responsivity.css";

import api from "../../services/api";

function Login() {
  const userName = localStorage.getItem("user_name");
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
  function handleRedirect() {
    if (userName) {
      history.push("/perfil");
    }
  }
  useEffect(() => {
    handleRedirect();
  });
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

        <Link to="/cadastro">
          <p>Não tenho cadastro</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
