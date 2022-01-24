import React from "react";

import "./styles.css";

import logoImg from "../../assets/delta.jpg";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Delta" />
        <span>Bem vindo, Lucas</span>
      </header>
      <h1>Estudantes Cadastrados</h1>
      <ul>
        <li>
          <strong>Estudante:</strong>
          <p>Estudante Teste</p>

          <strong>Endereco:</strong>
          <p>Endereco Teste</p>

          <strong>Foto:</strong>
          <p>Foto Teste</p>
        </li>
      </ul>
    </div>
  );
}
