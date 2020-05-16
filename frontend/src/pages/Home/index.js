import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { FcDocument } from "react-icons/fc";
import "./style.css";
function Home() {
  const history = useHistory();
  const userName = localStorage.getItem("user_name");
  function handleRedirect() {
    if (!userName) {
      history.push("/");
    }
  }

  useEffect(() => {
    handleRedirect();
  });

  return (
    <div className="home">
      <Navbar />
      <div className="home-section">
        <section className="form-section">
          <h1>Formaulário de petição</h1>
          <p>
            Cadastre seus clientes e gere um arquivo PDF com um formulário de
            petição.
          </p>
          <FcDocument size={52} />
        </section>
        <section className="form-section">
          <h1>Formaulário de petição</h1>
          <p>
            Cadastre seus clientes e gere um arquivo PDF com um formulário de
            petição.
          </p>
          <FcDocument size={32} />
        </section>
        <section className="form-section">
          <h1>Formaulário de petição</h1>
          <p>
            Cadastre seus clientes e gere um arquivo PDF com um formulário de
            petição.
          </p>
          <FcDocument size={32} />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
