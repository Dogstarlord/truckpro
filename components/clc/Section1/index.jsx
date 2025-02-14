import styles from "./styles.module.scss";

export default function Section1() {
  return (
    <div className={styles.hero}>
      {/* Camada escura para sobreposição */}
      <div className={styles.overlay}></div>

      {/* Conteúdo dentro da imagem */}
      <div className={styles.content}>
        <h1> Tudo para manter seu caminhão na estrada! </h1>
        <p>
          Peças de qualidade, das melhores marcas, com atendimento especializado.
          Encontre tudo o que você precisa na TrucksPro.
        </p>
        <button>SAIBA MAIS</button>
      </div>
    </div>
  );
}
