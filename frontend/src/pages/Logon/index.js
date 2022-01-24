import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

import studentsImg from "../../assets/students.jpg";
import logoImg from "../../assets/delta.jpg";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Delta" />
        <form>
          <h1>Faça seu Logon</h1>

          <input placeholder="Seu nome" />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={studentsImg} alt="Students" />
    </div>
  );
}
