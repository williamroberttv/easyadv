import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/cadastro" component={Cadastro} />
    </BrowserRouter>
  );
}
