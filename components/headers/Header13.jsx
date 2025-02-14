"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import CartSidebar from "../common/CartSidebar";

export default function Header13() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleCart = (e) => {
    e.preventDefault();
    setIsCartOpen(!isCartOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <header
      id="header"
      className={styles["header-default"]}
      style={{
        backgroundColor: "#302681", // Fundo azul
        color: "#fff",
        padding: "10px 0",
      }}
    >
      <div className="container-full px_15 lg-px_40">
        <div className="row wrapper-header align-items-center">
          {/* Logo e menu de categorias no lado esquerdo */}
          <div className="col-xl-6 d-flex align-items-center">
            {/* Imagem do truck */}
            <Image
              alt="Truck logo"
              src="/images/truck.png"
              width={172}
              height={108}
              priority
            />
            {/* Texto "TrucksPro" */}
            <h1
              style={{
                margin: "0 15px",
                fontSize: "2rem",
                fontWeight: "bold", // Texto mais grosso
                color: "#fff", // Cor branca
                display: "flex",
                alignItems: "center",
              }}
            >
              TrucksPro
            </h1>
            {/* Categorias */}
            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <button
                onClick={toggleCategories}
                style={{
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: "1rem",
                  cursor: "pointer",
                  fontWeight: "bold", // Texto mais grosso
                }}
              >
                Categorias
              </button>
              {isCategoriesOpen && (
                <ul
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "#fff",
                    color: "#000",
                    listStyle: "none",
                    padding: "10px",
                    borderRadius: "5px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <li>
                    <Link href="/categoria1">Categoria 1</Link>
                  </li>
                  <li>
                    <Link href="/categoria2">Categoria 2</Link>
                  </li>
                  <li>
                    <Link href="/categoria3">Categoria 3</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Telefone, WhatsApp e carrinho no lado direito */}
          <div className="col-xl-6 d-flex justify-content-end align-items-center">
            {/* Telefone */}
            <div className="d-flex flex-column align-items-end">
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
              (34)99276-4852
              </span>
              {/* Link para WhatsApp */}
              <Link
                href="https://wa.me/34992764852"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                Fale no WhatsApp
              </Link>
            </div>
            {/* Carrinho */}
            <div className="d-flex align-items-center" style={{ marginLeft: "20px" }}>
              <span style={{ marginRight: "10px", fontSize: "1rem" }}>Carrinho</span>
              <button
                onClick={toggleCart}
                className={styles["cart-button"]}
                aria-label="Abrir carrinho"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <Image
                  src="/images/carrinho.svg"
                  alt="Carrinho"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      )}
    </header>
  );
}
