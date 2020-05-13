import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
function Home() {
  const history = useHistory();
  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }
  const userName = localStorage.getItem("user_name");
  return (
    <div>
      <Navbar />
      <div style={{ margin: 100, textAlign: "center" }}>
        <h1>BEM VINDO {userName}</h1>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
