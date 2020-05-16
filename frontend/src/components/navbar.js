import React from "react";
import { FiLogOut } from "react-icons/fi";
import { NavLink, useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const userName = localStorage.getItem("user_name");
  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <header className="navbar">
      <h1>
        <span>Easy</span>ADV
      </h1>
      <nav>
        <ul>
          <li>Bem Vindo(a) {userName}</li>
          <li>
            <NavLink to="/">Início</NavLink>
          </li>
          <li>
            <NavLink to="/perfil">Sobre</NavLink>
          </li>
          <li>
            <FiLogOut
              onClick={handleLogout}
              size={22}
              color={"#6c63ff"}
              cursor={"pointer"}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
