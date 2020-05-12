import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <h1>
        <span>Easy</span>ADV
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link>Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
