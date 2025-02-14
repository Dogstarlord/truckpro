"use client";

import { useState } from "react";
import styles from "./styles.module.scss";

export default function Section2() {
  const [activeTab, setActiveTab] = useState("PNEU");
  const [dropdown, setDropdown] = useState({ largura: false, aro: false, perfil: false });

  const toggleDropdown = (key) => {
    setDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={styles.container}>
      {/* Barra de Pesquisa Alongada */}
      <div className={styles.searchBar}>
        <input type="text" placeholder="Pesquisar" />
        <button>
          <img src="/images/search.png" alt="Pesquisar" />
        </button>
      </div>

      {/* Tabs de categorias */}
      <div className={styles.tabs}>
        {["PNEU", "CARRO", "CAMINHÃO"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? styles.activeTab : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filtros com Dropdown */}
      <div className={styles.filterContainer}>
        {["largura", "aro", "perfil"].map((key) => (
          <div key={key} className={styles.filterItem} onClick={() => toggleDropdown(key)}>
            {key.charAt(0).toUpperCase() + key.slice(1)} <span>▼</span>
            {dropdown[key] && (
              <ul className={styles.dropdown}>
                <li>Opção 1</li>
                <li>Opção 2</li>
                <li>Opção 3</li>
              </ul>
            )}
          </div>
        ))}
        <button className={styles.productsButton}>VER PRODUTOS</button>
      </div>
    </div>
  );
}
