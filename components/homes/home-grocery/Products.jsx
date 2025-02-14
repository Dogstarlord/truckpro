"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function BestSellers({ products }) {

  const formatPrice = (price) => `R$ ${price.toFixed(2)}`;
  const scrollRef = useRef(null);

  // Lista de imagens (substitua pelos links reais)
  // const imageLinks = [
  //   "/images/pneu.png",
  //   "/images/pneu2.png",
  //   "/images/pneu3.png",
  //   "/images/pneu4.png",
  //   "/images/pneu5.png",
  //   "/images/pneu6.png",
  //   "/images/pneu7.png",
  //   "/images/pneu8.png",
  //   "/images/pneu9.png",
  //   "/images/pneu10.png",
  // ];

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <div>
        <h2
          style={{
            marginTop: "100px",
            marginBottom: "30px",
            fontSize: "24px",
            fontWeight: "500",
          }}
        >
          MAIS VENDIDOS
        </h2>

        {/* Botões de navegação */}
        {/* <div className="navButtons">
          <button onClick={() => (scrollRef.current.scrollLeft -= 1000)}>◀</button>
          <button onClick={() => (scrollRef.current.scrollLeft += 1000)}>▶</button>
        </div> */}

        {/* Container rolável */}
        <div className="scrollContainer" ref={scrollRef}>
          <div className="gridContainer">
            {products.slice(0, 10).map((product, index) => (
              <div style={styles.card} key={product.id}>
                <Link href={`/product-detail/${product.id}`}>
                  <Image
                    src={product.img} // Usa as imagens da lista
                    alt={product.title}
                    width={533}
                    height={497}
                    style={styles.image}
                  />
                </Link>
                <div style={styles.details}>
                  <p style={styles.description}>
                    {product.description.slice(0, 100)}
                  </p>
                  <span style={styles.price}>{formatPrice(product.price)}</span>
                  <div style={styles.buttonGroup}>
                    <button style={styles.buyButton}>Comprar</button>
                    <Link
                      href={`/product-detail/${product.id}`}
                      style={styles.viewButton}
                    >
                      Visualizar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollContainer {
          overflow-x: auto;
          white-space: nowrap;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
        }

        .scrollContainer::-webkit-scrollbar {
          display: none; /* Esconde a barra de rolagem */
        }

        .gridContainer {
          display: flex;
          gap: 20px;
        }

        .navButtons {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .navButtons button {
          padding: 10px;
          font-size: 18px;
          border: none;
          background: #333;
          color: white;
          cursor: pointer;
          border-radius: 5px;
        }

        .navButtons button:hover {
          background: #555;
        }
      `}</style>
    </section>
  );
}

const styles = {
  card: {
    textAlign: "center",
    width: "250px",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
    flex: "0 0 auto", // Permite o scroll horizontal
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  },
  details: {
    marginTop: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "8px",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "12px",
    display: "block",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
  buyButton: {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    flex: 1,
  },
  viewButton: {
    textDecoration: "none",
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "5px",
    padding: "10px 15px",
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
};


