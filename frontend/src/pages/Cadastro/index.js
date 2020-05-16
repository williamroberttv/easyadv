import React, { useState } from "react";
import Socials from "../../components/socials";
import Footer from "../../components/footer";
import "./style.css";
import Navbar from "../../components/navbar";
import { Link, useHistory } from "react-router-dom";

import api from "../services/api";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      nome,
      sobrenome,
      email,
      senha,
    };
    try {
      await api.post("cadastro", data);
      alert("Usuário cadastrado com sucesso!");
      history.push("/");
    } catch (err) {
      console.log(err);
      alert("Erro ao cadastrar, tente novamente.");
    }
  }

  return (
    <div className="cadastro">
      <Navbar />
      <div className="cadastro-container">
        <div className="text">
          <h2>Vamos começar</h2>
          <p>Faça seu cadastro ao lado</p>
        </div>
        <div className="form-submission">
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="text"
              placeholder="Sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
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
            <button type="submit">Cadastrar</button>
            <p>
              <Link to="/">Já tenho cadastro</Link>
            </p>
          </form>
        </div>
      </div>
      <Socials />
      <Footer />
    </div>
  );
}

export default Cadastro;
