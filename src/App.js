
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Desafio Prático</h1>
        <h2>Variáveis e CI/CD</h2>

        <p>
          Projeto desenvolvido para demonstrar a utilização
          da variável de ambiente CI=false no processo de Build.
        </p>

        <div className="status">
          <span>CI=false</span>
          <span>Build configurado</span>
        </div>

        <h3>Objetivo do projeto</h3>

        <ul>
          <li>Configurar variáveis de ambiente.</li>
          <li>Executar o processo de Build.</li>
          <li>Integrar o projeto ao GitHub Actions.</li>
          <li>Verificar o resultado da pipeline.</li>
        </ul>

        <footer>
          Desenvolvido para o desafio prático de CI/CD.
        </footer>
      </div>
    </div>
  );
}

export default App;
