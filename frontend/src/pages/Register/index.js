import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import logoImg from "../../assets/delta.jpg";

export default function Register() {
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
          <input placeholder="Nome" />
          <input placeholder="Endereco" />
          <input placeholder="Foto" />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
