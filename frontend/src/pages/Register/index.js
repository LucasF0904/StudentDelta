import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/delta.jpg";

export default function Register() {
  const [name, setName] = useState("");
  const [endereco, setEndereco] = useState("");
  const [foto, setFoto] = useState("");
  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      endereco,
      foto,
    };
    try {
      const response = await api.post("students", data);
      alert(`Cadastrado com sucesso ${response.data}`);
    } catch (err) {
      alert(`Erro ao registrar`);
    }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Delta" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro e entre na plataforma</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>
        <form>
          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <input
            type="file"
            placeholder="Foto"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
