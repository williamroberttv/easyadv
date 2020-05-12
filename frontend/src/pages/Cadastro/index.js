import React from "react";
import Socials from "../../components/socials";
import Footer from "../../components/footer";
import "./style.css";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="cadastro">
      <Navbar />
      <div className="cadastro-container">
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
          <input type="date" placeholder="Data de nascimento" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button>Cadastrar</button>
        </form>
        <p>
          <Link to="/">Já tenho cadastro</Link>
        </p>
      </div>
      <Socials />
      <Footer />
    </div>
  );
}

export default Cadastro;
