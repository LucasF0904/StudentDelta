import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

import studentsImg from "../../assets/students.jpg";
import logoImg from "../../assets/delta.jpg";

export default function Logon() {
  const [nome, setNome] = useState("");
  async function handleLogon() {
    const data = {
      nome,
    };

    try {
      const response = await api.get("students", data);
      alert(`Estudante encontrado com sucesso ${response.data}`);
    } catch (err) {
      alert(`Erro ao achar estudante`);
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Delta" />
        <form>
          <h1>Faça seu Logon</h1>

          <input
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button className="button" type="submit" onClick={handleLogon}>
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
